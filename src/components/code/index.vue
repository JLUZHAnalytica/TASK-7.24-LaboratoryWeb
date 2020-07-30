<template>
  <div>
    <!-- <button id="run" @click="getvalue">run</button> -->
    <textarea ref="textarea"></textarea>
    <select v-model="mode" class="code-mode-select">
      //@change="changeMode"
      <option :value="mode.value" v-for="mode in modes" :key="mode.value">{{mode.label}}</option>
    </select>
  </div>
</template>

<script>
import _CodeMirror from "codemirror";
// 核心样式
import "codemirror/lib/codemirror.css";
// 引入主题后还需要在 options 中指定主题才会生效
import "./leetcode.css"; //idea darcula主题样式
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/lint/lint.css";

import "codemirror/lib/codemirror.js";
import "codemirror/mode/python/python.js"; //python语言
import "codemirror/addon/hint/show-hint.js";
import "codemirror/keymap/sublime.js"; // 快键键风格
import "codemirror/addon/fold/foldgutter.js"; // 启用行槽中的代码折叠
import "codemirror/addon/comment/comment.js";
import "codemirror/addon/selection/active-line.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/foldcode.js";

import "codemirror/addon/edit/matchbrackets.js"; //匹配括号
import "codemirror/addon/edit/closebrackets.js"; //补全括号

const CodeMirror = window.CodeMirror || _CodeMirror;

// import {codemirror} from "vue-codemirror";
export default {
  name:"v-Code",
  // components:{
  //   code,
  // },
  data() {
    return {
      code: "",
      editor: "",
      // 默认的语法类型
      mode: "python",
      options: {
        mode: "python",
        // 缩进格式
        tabSize: 4,
        // 主题，对应主题库 JS 需要提前引入
        theme: "leetcode",
        // 显示行号
        lineNumbers: true,
        line: true,
        lineWrapping: true, // 自动换行
        styleActiveLine: true, // 当前行背景高亮
        smartIndent: true,
        indentUnit: 4, // 缩进单位为4
        extraKeys: { Ctrl: "autocomplete" }, //避免热键冲突
        keyMap: "sublime", // 快键键风格
        indentWithTabs: true, // 使用制表符进行智能缩进
        // 在行槽中添加行号显示器、折叠器、语法检测器
        gutters: [
          "CodeMirror-linenumbers",
          "CodeMirror-foldgutter",
          "CodeMirror-lint-markers",
        ],
        foldGutter: true, // 启用行槽中的代码折叠
        autofocus: true, // 自动聚焦
        matchBrackets: true, // 匹配结束符号，比如"]、}"
        autoCloseBrackets: true, // 自动闭合符号
        // hintOptions: {//自定义提示选项
        //     tables: {
        //       users: ['name', 'score', 'birthDate'],
        //       countries: ['name', 'population', 'size']
        //     }
        //   }
      },
      modes: [
        {
          value: "python",
          label: "python",
        },
      ],
    };
  },
  methods: {
    getvalue() {
      let value = this.editor.getValue();
      console.log(value);
    },
    // _initialize() {
    //   // 初始化编辑器实例，传入需要被实例化的文本域对象和默认配置
    //   this.coder = CodeMirror.fromTextArea(this.$refs.textarea, this.options);

    //   // 编辑器赋值
    //   this.coder.setValue(this.value || this.code);

    //   // 支持双向绑定
    //   this.coder.on("change", (coder) => {
    //     this.code = coder.getValue();
    //   });

    //   // 尝试从父容器获取语法类型
    //   if (this.language) {
    //     // 获取具体的语法类型对象
    //     let modeObj = this._getLanguage(this.language);

    //     // 判断父容器传入的语法是否被支持
    //     if (modeObj) {
    //       this.mode = modeObj.label;
    //     }
    //   }
    // },
    // // 获取当前语法类型
    // _getLanguage(language) {
    //   // 在支持的语法类型列表中寻找传入的语法类型
    //   return this.modes.find((mode) => {
    //     // 所有的值都忽略大小写，方便比较
    //     let currentLanguage = language.toLowerCase();
    //     let currentLabel = mode.label.toLowerCase();
    //     let currentValue = mode.value.toLowerCase();
    //     // 由于真实值可能不规范，例如 java 的真实值是 x-java ，所以讲 value 和 label 同时和传入语法进行比较
    //     return (
    //       currentLabel === currentLanguage || currentValue === currentLanguage
    //     );
    //   });
    // },
    // // 更改模式
    // changeMode(val) {
    //   // 修改编辑器的语法配置
    //   this.coder.setOption("mode", `text/${val}`);

    //   // 获取修改后的语法
    //   // let label = this._getLanguage(val).label.toLowerCase();
    // },
  },
  mounted() {
    // this._initialize();
    let editor = CodeMirror.fromTextArea(this.$refs.textarea, this.options);
    //代码自动提示功能，记住使用cursorActivity事件不要使用change事件，这是一个坑，那样页面直接会卡死
    editor.on("keypress", function () {
      editor.showHint();
    });
    this.editor = editor;
  },
};
</script>