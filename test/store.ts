import { action, observable } from 'mobx'

class DemoStore {
  @observable
  name = ''

  @observable
  data: { [key: string]: any } = {}

  @action
  setName(name: string) {
    this.name = name
  }

  @action
  setData(field: string, value: any) {
    this.data[field] = value
  }

  getData(field: string) {
    return this.data[field]
  }
}

const demoStore = new DemoStore()

export default demoStore
