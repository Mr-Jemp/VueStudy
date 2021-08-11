import Vue from "vue";

export function WithValidate(Component) {
  return Vue.component('hoc-' + Component.name, {
    data() {
      return {
        msg: "",
        value: '1'
      };
    },
    render() {
      return (
        <div>
          {/* 监听子组件传递过来的emit，并传入初始值 */}
          <Component onblur={this.validate} initValue={this.value} />
          {this.msg}
        </div>
      )
    },
    methods: {
      validate(value) {
        if (value) {
          this.msg = "";
        } else {
          this.msg = "请输入内容";
        }
      },
    }
  })
}
