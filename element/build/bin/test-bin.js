/*
 * @Author       : ymq
 * @Date         : 2022-08-26 15:21:21
 * @LastEditors  : Do not edit
 * @LastEditTime : 2022-08-26 17:28:16
 * @Description  : Do not edit
 * @FilePath     : \element-analysis\element\build\bin\test-bin.js
 */
const fileSave = require("file-save");

process.on("exit", () => {
  console.log();
});

const argu = process.argv[2];
if (!argu) {
  console.error("组件名称必填, Please component name");
  process.exit(1);
}

const template = `<template>
    <div>component</div>
</template>
<script>
export default {
    name: 'component',
    methods: {
        testFn() {
            console.log("test function")
        }
    }
}
</script>
`

const componentsFile = require('../../components.json');

fileSave("testsample/componentsFile.json")
  .write(JSON.stringify(componentsFile, null, '  '), "utf8", function() {
    console.log("writer callback");
  })
  .error(function() {
    console.log("error goes here");
  })

fileSave("testsample/test.vue")
  .write(template, "utf8", function() {
    console.log("writer callback");
  })
  .error(function() {
    console.log("error goes here");
  })
