import {
  RiotComponentShell,
  RiotComponent,
  mount,
  unmount,
  register,
  unregister,
} from '../riot'
import { template } from '@riotjs/dom-bindings'

interface TodoItem {
  summary: string
  done: boolean
}

interface TodoProps {
  initialItems: [TodoItem]
}

interface TodoState {
  items: [TodoItem]
  doShowDoneItems: boolean
}

interface TodoComponentShell extends RiotComponentShell<TodoProps, TodoState> {
}

interface TodoComponent extends RiotComponent<TodoProps, TodoState> {
}

//  equivalent to `import todo from "todo"`
const todo: TodoComponentShell = {
  template(template, expressionTypes, bindingTypes, getComponent) {
    return template('Hello')
  }
}

const component: TodoComponent = mount<TodoProps, TodoState>('todo', {
  initialItems: [
    { summary: 'buy eggs', done: false }
  ]
}, 'todo')[0]

component.update({ doShowDoneItems: false }, { })
component.unmount(true)
