import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Task} from '../model/task';
import {DATA_PROVIDERS, DataProvider} from '@ngx-metaui/fiori-rules';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {debounceTime, tap} from 'rxjs/operators';
import {Action, META_RULES, MetaRules} from '@ngx-metaui/rules';
import {load, save} from '../rest/utils';


/**
 * In Real Meta UI project this would contain only entry point to this specific
 * Domain class.
 */
@Component({
  selector: 'fdp-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({});
  task: Task;


  operation: string;

  private autoSaveSub: Subscription;

  constructor(private _cd: ChangeDetectorRef,
              @Inject(META_RULES) protected meta: MetaRules,
              @Inject(LOCALE_ID) public locale: string,
              @Inject(DATA_PROVIDERS) private providers: Map<string, DataProvider<any>>,
              private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.operation = this.route.snapshot.url[1].path;
    this.meta.registerDependency('controller', this);
    this.task = load(this.route.snapshot.params.id || null, 'tasks') || new Task();
    if (this.operation !== 'view') {
      this.initAutosave();
    }
  }

  ngOnDestroy() {
    if (this.operation !== 'view') {
      this.autoSaveSub.unsubscribe();
    }
  }


  onBackButtonClick() {
    window.history.back();
  }

  /**
   * Showcases how we can annotate method and it will translate to action on the UI. Usually all these
   * methods would not be here as it would be part of the state management which would handle CRUD
   *
   */
  @Action({applyTo: Task})
  edit(event: Task) {
    this.router.navigate([`/demo/tasks/edit/${event.uniqueName}`]);
  }

  @Action({applyTo: Task})
  save(event: Task) {
    this.form.updateValueAndValidity();
    if (this.form.valid) {
      save(this.task, this.form, 'tasks', 'T-');
      this.onBackButtonClick();
    }
    this._cd.detectChanges();
  }


  @Action({applyTo: Task})
  reset(event: Task) {
    localStorage.removeItem('in-progress');
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      control.reset(undefined, {onlySelf: true, emitEvent: true});
    });
    this.task = null;
  }


  private initAutosave() {
    this.autoSaveSub = this.form.valueChanges
      .pipe(
        debounceTime(1500),
        tap(change => {
          if (this.form.dirty) {
            if (this.form.value && this.form.value.internalId) {
              save(this.task, this.form, 'tasks', 'T-');
            } else {
              localStorage.setItem('in-progress', JSON.stringify(this.form.value));
            }
          }
        })
      )
      .subscribe();
  }
}
