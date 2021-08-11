export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    validate(value) {
      if (value) {
        this.msg = "";
      } else {
        this.msg = "请输入内容";
      }
    },
  },
};
