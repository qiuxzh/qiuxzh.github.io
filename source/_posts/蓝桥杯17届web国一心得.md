## 总

总体来看，web赛道的难度上比 C/C++、Java、Python 这样的算法类赛道要简单很多


大致考点如下：
- js基本语法，比如（数组、字符串、Date对象、Promise、正则表达式）
- DOM、BOM api
- axios，fetch，xhr等ajax请求调用方式（axios为主）
- Vue组合式语法（setup语法、watch、computed、自定义指令、插槽、父子通信等）
- vue-router
- pinia
- node的 api，包括fs，path，http
- css （尤其是flex布局，grid布局）
- html
- element-plus（不需要记住每个组件的props等，考试会给文档，但是要熟悉）
- echarts（不需要记住api，只需要有大概的影响）

建议都系统的自学一遍。



17届省赛：
题目记不太清楚了，只知道考前没复习fs模块的api，导致一道很简单的题0分。



国赛心得：


题目特点：
有的题目判分可能是这样的：

```
- 完成目标 1，得 5 分。
- 完成目标 2，得 10 分。
- 完成目标 3，得 10 分。
```

每个小问都是独立的，目标1没写出来，不影响你做目标2；目标2没写出来，也不影响你写目标3。


还有的题目是这样判分的：
```
- 完成目标 1，得 5 分。
- 完成目标 2，得 10 分。
- 完成目标 2 的基础上完成目标 3，得 10 分。
```

第三小问需要在第二小问做对的基础上做对，才能拿到第三问的分。

这意味着你无法在第二问没做出来的情况下做对第三问。

 


vue的ref需要.value吗？reactive呢？computed呢？pinia的state呢？

## 具体考点

### css/html

css是必考的，一般在第一题。
最常考的 flex布局，还有grid布局。还考过 transform

html是基本功，题目一般不会直接考，但是必须了解 html

能记住就能得全分，记不住基本就是0分了。


附一些网课：
- [flex讲解](https://www.bilibili.com/video/BV1cbCuBqE7L)
- [grid讲解](https://www.bilibili.com/video/BV1yXqaBoEv1/)
- [grid讲解2](https://www.bilibili.com/video/BV18p411A7JB)


css很难，但是很多东西似乎不考（至少我还没遇到过）
- 定位
- 浮动
- 文字排版

### js

熟练掌握js是毋庸置疑的。

最重要的是js的字符串、数组、object处理、Set



我的笔记如下：


```js
str.charAt(i) //按索引取字符
`xxx${var}` //模板字符串
str.repeat(n)

'javascript'.includes('java') // true //  是否包含子串
str.startsWith('hello'); //  
str.endsWith('d'); // 

'abc'.charAt(1) //  'b'
'a'.charCodeAt(0) //  97

// 截取 [start, end)，slice支持负数，substring不支持
'javascript'.slice(0,4) // 'java'
'javascript'.slice(-3) // 'ipt'
str.substring(start, end)

// 替换
'hello hello'.replace('hello', 'hi'); // 'hi hello'   replace只替换第一个！
'hello hello'.replaceAll('hello', 'hi'); // 'hi hi'  ES2021新增
"hello hello world".replace(/hello/g, "hi"); // "hi hi world" 加g是全部替换

'abc'.repeat(3) // "abcabcabc"

'123'.padStart(5, '*') // "**123"   第一个参数是想要的总长度，第二个参数默认是空格
'5'.padEnd(2, '0') // "50"
```



```js
[1,2,3].push('a')                    // 4                     尾部添加，返回新长度
[1,2,3].pop()                        // 3                     尾部删除，返回被删元素
[1,2,3].unshift('a')                 // 4                     头部添加，返回新长度
[1,2,3].shift()                      // 1                     头部删除，返回被删元素

[1,2].concat([3,4])                  // [1,2,3,4]             拼接数组，🚩返回新数组（原数组不变）
[1,2,3,4,5].slice(1,3)               // [2,3]                 截取 [start,end)，返回新数组
[1,2,3,4,5].slice(-2)                // [4,5]                 截取最后2个元素
// splice 数组.splice(起始索引, 删除个数, 新增元素1, 新增元素2...)
// arr.splice(index, 1) 删除指定索引的元素
// 注意，splice 的返回值，是被删除的元素组成的新数组。
[1,2,3,4].splice(1,2,'a','b')        // [2,3]   原数组：[1, 'a', 'b', 4]      删/插/改，修改原数组。



[1,2,3,2].indexOf(2)                 // 1        🚩给值，找位置       查找第一个索引，找不到-1
[1,2,3,2].lastIndexOf(2)             // 3                     查找最后一个索引
[3,5,8].find(v=>v>4)                  // 5                     找第一个符合条件的元素
[3,5,8].findIndex(v=>v>4)            // 1                     找第一个符合条件的索引
[1,2,3].includes(2)                  // true                  是否包含值 🚩
// arr.indexOf('apple') 等价 arr.findIndex(item => item === 'apple')

[1,2,3].forEach(v=>{})               // undefined             遍历数组，无返回值
[1,2,3].map(v=>v*2)                  // [2,4,6]               映射，返回新数组
[1,5,10].filter(v=>v>5)               // [10]                  过滤，返回符合条件的新数组

[1,2,3].reduce((s,v)=>s+v,0)         // 6                     累计求和

Array.isArray([1,2])                 // true                  判断是否为数组
[1,2,3].join('-')                    // '1-2-3'               数组转字符串

[10, 2, 1].sort() // 结果：[1,10,2] ❌ 默认按照unicode排序
[3,1,2].sort((a,b)=>a-b)             // [1,2,3]               数字正序（修改原数组）
[3,1,2].sort((a,b)=>b-a)             // [3,2,1]               数字倒序（修改原数组）
[1,2,3].reverse()                    // [3,2,1]               反转数组（修改原数组）
[3, 1, 2].toSorted((a, b) => a - b)  // [1,2,3]  toSorted返回新数组，而sort是原地排序


[1,[2,[3]]].flat()                   // [1,2,[3]]             扁平化1层
[1,[2,[3]]].flat(Infinity)           // [1,2,3]               完全扁平化

[2,4,6].every(v=>v>1)                // true                  所有元素都满足条件
[1,3,5].some(v=>v>4)                 // true                  至少一个满足条件
```

```js
obj = {a:1, b:2}
Object.keys(obj)   => ['a','b']
Object.values(obj) => [1,2]
Object.entries(obj)=> [['a',1], ['b',2]] 

// 1. for...in 遍历（最基础）
for(let key in obj) {}                // 遍历 key，需手动判断是否自身属性
// 2. for...of 遍历键值对（最推荐）
for(let [k, v] of Object.entries(obj)){}
// 3. forEach 遍历
Object.entries(obj).forEach(([k,v])=>{})

const obj = { "name": "小明", "age": 18, "gender": "男" }
const obj = { name: "小明", age: 18, gender: "男" } // 简写


const obj = { name: "小明" }
'name' in obj                         // true   自身+原型链上的属性，不管是否可枚举
obj.hasOwnProperty('name')            // true   只看自身属性，不管是否可枚举
Object.keys(obj).includes('name')     // true   只看**自身+可枚举**属性
// 定义一个自身、不可枚举属性
Object.defineProperty(obj, 'a', { value:1, enumerable:false })
'a' in obj                  // true
obj.hasOwnProperty('a')     // true
Object.keys(obj).includes('a') // false



```


```js
const s = new Set()

s.add(1)        // 添加
s.delete(1)      // 删除
s.has(1)        // 判断是否存在 → true/false
s.clear()       // 清空所有
s.size          // 长度（不是 length！也不是size()）


const arr = [1, 2, 2, 3, 3, 3]
const s = new Set(arr)  // 转成 Set → 自动去重
const uniqueArr = [...s]  // 转回数组

const union = new Set([...setA, ...setB]) // 并
const intersect = new Set([...setA].filter(item => setB.has(item))) // 交

**Set 判断相等，用的是 === 严格相等**
```



### Date

date太重要了，因此我专门开一个标题来写。


我的笔记如下：（不太全，仅供参考。建议问AI）

```js
// 创建
const d = new Date()
const d = new Date(1750000000000)
const d1 = new Date('2025-05-14')
const d2 = new Date('2025-05-14 12:30:45')
const manualDate = new Date(2023, 9, 1, 12, 30, 0); // 2023 年 10 月 1 日 12:30:00
const s = Date() // 返回日期字符串


const date = new Date(); console.log(date.getTime()); // 毫秒时间戳1748381234567 （13位）
d.setTime(1748380123456)
d.setMonth(4) // 5月

// 比较日期早晚，>,>= ,<,<=
// 不能使用==和===，应该使用getTime()的===


// 判断两个日期之间差，使用getTime之差

d.toLocaleString()    // 2025/5/26 14:30:00
d.toLocaleDateString()// 2025/5/26
d.toLocaleTimeString()// 14:30:00
d.toISOString()       // 2025-05-26T06:30:00.000Z

// 根据时间字段降序
let sorted = arr.toSorted((a,b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

```


### vue


下面是我备赛时的笔记，基本涵盖所有语法考点。
容易记混的我一般会用 `⚠️` 标出


```js
// 组合式基础导入
import {ref,reactive,computed,watch,onMounted} from 'vue'
// defineXXX可以自动导入，这是编译时处理的，但是这只会在script setup里面用，因此比赛时可以认为都需要导入


ref(0).value = 1                   // ref基础类型，必须.value读写
reactive({a:1}).a = 2               // reactive对象/数组，直接读写，没有.value

let obj = reactive({ name: '小明' }) obj = { name: '小红' } // ⚠️ reactive 不可以重新赋值。响应式失效！


// 解构，
// ref和reactive都不可以解构。需要 toRefs(reactive) 或者 toRefs(ref.value)

computed(()=>n.value*2)             // 计算属性（只读） 
const 计算属性 = computed(() => 计算逻辑) // 只读的，传入一个getter函数
const 计算属性 = computed({ get(){}, set(val){} }) // 可写的计算属性，传入一个对象，有get和set
// 在script里面读写计算属性的值需要.value

const count = ref(0)
watch(count, (newVal, oldVal) => {})   // 监听单个 ref 数据。⚠️不能是普通的js对象。写监听的对象不需要.value。newVal也不需要.value
watch(count, (newVal) => {})           // 监听单个 reactive 对象
// 立即执行
watch(count, (newVal) => {}, {immediate: true})  
watch([count, () => user.age], ([newCount, newAge], [oldCount, oldAge]) => { // 监听多个数据
  console.log('count 或 age 变了')
})
// watch可以监听：reactive，ref（不需要.value）。


// 监听整个 reactive 对象 → 不用 deep。监听reactive的子属性且自属性是简单类型，加deep。但是如果监听 reactive 里的某引用属性，需要加deep
// 以下四种情况
// `ref(对象)`
// `ref(数组)`
// `() => reactive/ref.子对象`
// `() => reactive/ref.子数组`
const user = ref({ name: "小红" })
watch(user, () => { console.log("触发") }, { deep: true }) // ✅ 必须加！


onMounted(() => {                    // 页面挂载完成后执行（接口、初始化）
  console.log('组件已渲染')
})
onBeforeMount(() => {})           // 挂载开始前执行
onBeforeUpdate(() => {})          // 数据更新、DOM更新前执行
onUpdated(() => {})               // 数据更新、DOM更新后执行
onBeforeUnmount(() => {})         // 组件卸载前执行
onUnmounted(() => {})             // 组件卸载后执行


// 直接用 defineProps /defineEmits，不用导入
const props = defineProps(['msg'])  // 父传子，直接 props.msg
// props定义
['prop']
{ // 注意复杂写法要写成对象，不是数组。
prop:{
	type:Number,
	required:true,// required，不是require⚠️
	default:1
},
list:{
	type:Array,
	default:()=>[],
},
user: { type: Object, default: () => ({}) }}


// 如果是选项式api，写成和setup同级的。props: ['msg'],
const emit = defineEmits(['change']) // 子传父，触发事件。
emit('change', 1,2,3,4)
// 使用emit的数据。如果emit传入了多个数据，那下面handleMsg就有多个参数接收
<Child @sendMsg="handleMsg" />
const handleMsg = (a,b,c,d) => {}
// 或者
<Child @sendMsg="(a,b,c,d)=>{}" />
<Child @sendMsg="($event)=>{处理$event数组}" />

// 选项式 this.$emit
emit('ok', 100)
// $event是什么？
@ok="handle($event)" // $event = 100 ✅

emit('ok', 100, 200)
@ok="(a,b)=>{}"   // a=100, b=200
@ok="handle($event)"  // $event = [100,200]  如果是多个参数，$event是数组




// vue3的setup的emit完整写法。不可以使用 defineProps、defineEmits
<script>
export default {
  emits: ['close'],
  setup(props, { emit }) {
    emit('close')
  }
}
</script>


// 自定义指令 (局部)
const vFocus = { 
	mounted(el,binding){
	// v-color="red"  const red = ref("red")
	// 会被当成表达式解析 ⚠️
	// ⚠️ 自动解包ref
	binding.value // binding.value === red.value。
	// v-permission:admin
	binding.arg // 没有s!
	// v-click.once
	binding.modifiers // { once: true }  有s!
	},
	updated(el,binding){
	// 携带这个指令的组件在因为响应式数据发生更新而更新dom后触发
	
	}
}    // 自动聚焦指令
// 全局注册。不需要加  v-
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})



// 组件局部注册
export default {
  components: {
    // 格式：'模板中的标签名': 导入的组件变量
  }
}
// 组合式script setup 里面自动注册，在setup() 语法下不能自动注册
// 全局注册一个组件
app.component('BaseButton', BaseButton)


```


```vue
<!-- 条件渲染 -->
<div v-if="bool"></div>          <!-- 条件渲染，销毁/创建元素 -->
<div v-else-if="bool"></div>     <!-- 多条件分支 -->
<div v-else></div>               <!-- 否则渲染 -->
<div v-show="bool"></div>        <!-- 显示隐藏，切换 display -->

<!-- 列表渲染 -->
<div v-for="(item,i) in list" :key="i"></div> <!-- 列表渲染，必须绑定 key -->

<!-- 动态绑定 -->
<div :class="{ active: isActive }"></div>     <!-- 对象形式动态class -->
<div :class="[classA, classB]"></div>         <!-- 数组形式动态class -->
<div :style="{ color: textColor }"></div>     <!-- 对象形式行内样式 -->
<div :style="[style1, style2]"></div>         <!-- 数组形式行内样式 style1和2是响应式对象，如 
const style1 = { color: 'red', fontSize: '16px' }-->
<div :src="url"></div>           <!-- 动态属性绑定（v-bind 简写） -->

<!-- 事件绑定 -->
<button @click="fn"></button>    <!-- 点击事件（v-on 简写） -->
<button @click="num++"></button> <!-- 行内简单逻辑 -->
<input @input="handleInput">     <!-- 输入事件，@input：实时触发（输一个字触发一次） text的情况下 -->
<input @change="handleChange">   <!-- @change：text 失去焦点/回车 才触发。而select/radio/checkbox，内容改变就触发 -->
<button @click="handleClick(123)">传数字</button> 
<button @click="handleClick(id, $event)">点击</button>   <!-- 传参且传事件对象。$event是原生event对象 -->


<!-- 双向绑定 -->
<input v-model="val"></input>    <!-- 表单双向绑定 -->
<input v-model.lazy="val"></input><!-- 失焦后同步 -->
<input v-model.number="val"></input><!-- 自动转数字 -->
<input v-model.trim="val"></input><!-- 去除首尾空格 -->
<!-- 双向绑定的本质如下 -->
<input v-model="name">
<input :value="name" @input="name = $event.target.value">


<!-- 渲染控制 -->
<div v-text="msg"></div>         <!-- 纯文本渲染 -->
<div v-html="html"></div>        <!-- 渲染 HTML 结构 -->
<div v-pre></div>                <!-- 跳过编译，原样输出 -->
<div v-once></div>               <!-- 只渲染一次 -->

<!-- 自定义指令 -->
<div v-focus></div>              <!-- 自定义指令使用 -->


// 插槽
<slot></slot>
<slot>默认插槽</slot>
<slot name="title"></slot>   // <Child v-slot:title>aaa<Child> <Child #title>aaa<Child>
<slot :dataA="value"> </slot> // 作用域插槽


<slot name="title"></slot>        // 具名插槽
// 父组件：使用插槽
<Child>
  <template v-slot:title>标题</template> // v-slot 可以简写为井号。v-slot:xxx → #xxx
  <template #default>内容</template>   // #delfault是可以省略的
</Child>

// 作用域插槽，作用是传值
<slot :dataA="value1" :dataB="value2"></slot> <!-- 子组件传递 -->
<template v-slot="slotProps"> <!-- 父组件接收 -->
  {{ slotProps.dataA }} {{ slotProps.dataB }}
</template>

// 父组件传入多个插槽
<Child>
  <template v-slot:title>标题</template> // v-slot 可以简写为井号。v-slot:xxx → #xxx
  <template #default>内容</template>   // #delfault是可以省略的
</Child>

```


### promise

必考的知识点

你需要非常重视

promise创建、async语法糖、rece/allSettled/all/any方法、

建议自己手写一份，可以参考这个视频： [手写Promise核心代码 - JavaScript前端Web工程师_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1RR4y1p7my/)



### node

要求你记住fs、path、http模块的语法。

大概是这一坨：
```js
# ==================== path 路径 ====================
path.basename('/a/b/c.txt')        // c.txt              已知目录，获取文件名
path.dirname('/a/b/c.txt')         // /a/b               获取目录名
path.join('/a','b','c.txt')        // /a/b/c.txt         拼接路径✅自动处理斜杠
// path.extname('/a/b/c.txt')         // .txt               获取后缀
path.resolve('a','b')              // 绝对路径           转绝对路径（基于执行目录） 🚩 区分join和resolve
path.isAbsolute('/a/b')            // true               判断是否绝对路径
path.parse('/a/b/c.txt')           // {root,dir,base,ext,name} 解析路径对象
fs.statSync('路径').isFile()        // true=文件 🚩注意这是fs的方法，不是path的
fs.statSync('路径').isDirectory()   // true=文件夹
// 读取项目根目录下的json文件
const filePath = path.join(__dirname, 'data.json')


# ==================== fs 同步 ====================
fs.readdirSync('dir')              // [文件名]            读取目录下文件列表

fs.readFileSync('a.txt','utf-8')   // 读取文本内容✅同步
fs.writeFileSync('a.txt','hello')   // 写入文件（覆盖）✅不存在自动创建
fs.appendFileSync('a.txt','add')    // 追加内容（不覆盖）

fs.mkdirSync('dir',{recursive:true})// 创建文件夹✅递归创建
fs.rmdirSync('dir',{recursive:true})// 删除文件夹（含内容）
fs.rmSync('dir',{recursive:true})   // 通用删除（文件/文件夹）

fs.copyFileSync('a.txt','b.txt')   // 复制文件
fs.renameSync('a','b')             // 重命名/移动文件
fs.unlinkSync('a.txt')             // 删除文件

fs.existsSync('a.txt')             // true/false 判断是否存在⚠️不建议配合读写
fs.statSync('a').isFile()          // true               是否是文件
fs.statSync('a').isDirectory()     // true               是否是目录

```

```js
# ==================== 创建服务器 ====================
http.createServer((req,res)=>{}).listen(3000)  // 创建HTTP服务器并监听端口

# ==================== 请求对象 req ====================
req.method        // GET/POST/PUT/DELETE  请求方法
req.url           // 请求路径（如 /api/user）
req.headers       // 请求头对象（{host,content-type}）
let data  = ''
req.on('data',chunk=>{data += chunk.toString()})   // 接收请求体数据。chunk的Buffer对象
req.on('end',()=>{})       // 请求体接收完成

# ==================== 响应对象 res ====================
res.setHeader('Content-Type','application/json')  // 设置响应头
res.writeHead(200,{'Content-Type':'text/plain'})   // 设置状态码+响应头
res.write('hello')  // 写入响应内容并发送。多次write用于流式传输的场景
res.end('bye')      // 结束响应并发送数据✅必须调用
res.end(JSON.stringify({msg:'ok'})) // 返回JSON

# ==================== 发送请求（客户端） ====================
http.get('http://xxx',res=>{})  // 发送GET请求
http.request(options,cb=>{})    // 通用请求（支持POST/PUT/DELETE）

```




最坑的是这些api非常容易记错，譬如，同步删除文件夹的api，是`fs.rmDirSync`，还是`fs.rmdirSync`？
如果记不清楚，考试的时候还需要花时间


真的记不住也不是没办法

比如，你想列出文件夹下面的目录，但是不知道函数名是啥了，可以在命令行敲`node`，导入fs，然后打印它，就可以看到fs的所有方法了，阅读这些方法名，就能知道函数名是什么了


![image.png](https://qiuxz-blog-image.oss-cn-beijing.aliyuncs.com/blog/20260612122908398.png)



### vue-router

```jsx
# 路由创建
createRouter({ history: createWebHistory(), routes: [] }) // history模式
createRouter({ history: createWebHashHistory(), routes: [] }) // hash模式(#)

# 路由配置
{ path: '/home', name: 'Home', component: Home } // 基础路由 + 命名路由。name是可选的
{ path: '/user/:id', name: 'User', component: User, props: true } // 动态路由 + name ， props传参
{ path: '/', redirect: '/home' } // 重定向首页
{ path: '/:pathMatch(.*)*', component: NotFound } // 404兜底


// { path: '/user/:id', component: User } 如何拿到id参数？
import { useRoute } from 'vue-router'
const route = useRoute()
console.log( route.params.id ) // 拿到参数。 类型是字符串。
// { path: '/user/:id', component: User, props: true } 如果有props，那更好拿
const props = defineProps(['id'])
console.log( props.id ) // 注意，类型是字符串。



# 路由跳转 (useRouter/$router)
router.push('/home') // 跳转，新增历史。重要 🚩
router.replace('/home') // 替换历史⚠️无法返回
router.go(-1) // 后退1页
router.back() // 后退
router.forward() // 前进

router.push({
  name: 'User',          // 必须用 name
  params: { id: 123 },   // User路由需要配置了 /user/:id。 不用name，用path，则params无效
  query: { tab: 'info' } // 对应 ?tab=info
})
// 我定义了path是 /user/:id的path，现在要编程式跳转，path写什么?
router.push({path: '/user/100'})
// 或者定义好name，用name和params跳转
// 不可以 ⚠️
router.push({
  path: '/user',    // 你不能只写 /user
  params: { id:100 } // params 会失效！
})

router.addRoute(route) // 动态加路由
router.removeRoute(name) // 删除路由
router.hasRoute(name) // 判断是否存在
router.getRoutes() // 获取所有路由


# 路由信息 (useRoute/$route)
route.path // 当前路径
route.fullPath // 完整路径(含query)
route.params.id // 动态路由参数
route.query.key // http://localhost:8080/search?key=1 查询参数
route.meta // 路由元信息



# 路由组件
<router-link to="/home">首页</router-link> // 声明式导航
<router-link :to="{ path:'/user',query:{id:1} }"> // 带query。这个to就类似router.push的参数
<router-view></router-view> // 路由出口，也就是路由组件会渲染到router-view的位置

# 路由守卫
router.beforeEach((to,from)=>{}) // 全局前置守卫。不是 from,to
router.afterEach(()=>{}) // 全局后置守卫
beforeRouteEnter(){} // 组件进入守卫
beforeRouteUpdate(){} // 路由更新(参数变)
beforeRouteLeave(){} // 离开页面
```


### pinia


```js
// 选项式 Store 定义
import { defineStore } from 'pinia'
export const useStore = defineStore('id', {
  state: () => ({ count: 0 }),
  getters: { dbl: s => s.count*2 },
  actions: { add(){ this.count++ } }
})

// 组合式 Store 定义
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useStore = defineStore('id', () => {
  const count = ref(0)
  const dbl = computed(() => count.value*2)
  const add = () => count.value++
  return { count, dbl, add }
})

// 组件内使用（完整记忆版）
import { useStore } from '@/stores/xxx'
const store = useStore() // 🚩 需要创建store
store.count        // 获取值。pinia底层会把对象包装为reactive，因此就不需要写value
store.count = 10   // 设置值
store.add()        // 执行方法
userStore.$state = { count: 0, user: {} } // 替换整个state
```

### ajax

侧重复习 axios，譬如如何发起 get 请求、获取响应结果

很多题目第一问都让用 axios 发起请求拿到数据，是送分题，一定要学会 axios

fetch也尽量学习一下
原生的xhr可选

### dom


```js
document.getElementById('id')                // 获取单个元素
document.querySelector('.cls')               // 匹配第一个元素
document.querySelectorAll('.cls')            // 返回NodeList集合

el.id = 'a'                                   // 直接读写标准属性
el.setAttribute('data-id', 1)                 // 设置自定义属性
el.getAttribute('data-id')                    // 获取自定义属性
el.removeAttribute('data-id')                 // 删除属性
el.classList.add('a')                         // 添加类名
el.classList.remove('a')                      // 删除类名
el.classList.toggle('a')                      // 切换类名
el.classList.contains('a')                    // 判断是否包含类名

el.style.color = 'red'                        // 设置行内样式
getComputedStyle(el).width                    // 获取最终计算样式（只读）

el.innerText = '文本'                         // 纯文本（会渲染样式）
el.textContent = '文本'                       // 纯文本（不渲染）
el.innerHTML = '<b>1</b>'                     // 插入HTML ⚠️ XSS风险

el.parentNode                                 // 获取父节点
el.parentElement                              // 获取父元素
el.children                                   // 子元素集合（仅元素）
el.childNodes                                 // 不好用 
el.firstElementChild                          // 第一个子元素
el.lastElementChild                           // 最后一个子元素
el.previousElementSibling                     // 上一个兄弟元素
el.nextElementSibling                         // 下一个兄弟元素

document.createElement('div')                // 创建元素节点
parent.appendChild(child)                    // 末尾添加子节点
parent.insertBefore(newNode, refNode)         // 插入到参考节点前
parent.removeChild(child)                     // 删除子节点
el.remove()                                   // 直接删除自身 ✅ 文本 / 注释节点无 remove
// el.parentNode.removeChild(el);
el.cloneNode(true)                            // 深克隆；false浅克隆


el.addEventListener('click', fn)              // 绑定事件
el.removeEventListener('click', fn)           // 移除事件
e.target                                      // 实际触发元素
e.currentTarget                               // 绑定事件元素
e.preventDefault()                            // 阻止默认行为
e.stopPropagation()                           // 阻止事件冒泡

el.offsetWidth / offsetHeight                 // 宽高(含边框)
el.clientWidth / clientHeight                 // 宽高(不含边框)
el.offsetTop / offsetLeft                    // 相对定位父级坐标
window.scrollY                               // 页面纵向滚动距离
el.getBoundingClientRect()                    // 视口内位置+尺寸

document.documentElement                      // <html>根元素
document.body                                 // <body>元素
document.title                                // 页面标题
document.URL                                  // 当前页面URL
```


### 正则表达式




### 其他

只记得语法还不够，下面的这些内容我觉得对比赛非常有用，可以很好的复习语法以及训练你的思维：
- 封装一个计算`[a,b]`之间的随机数
- 封装一个能格式化时间为`YYYY-MM-DD HH-mm-ss`的函数
- 使用`node`的`fs`、`path`等 api 实现 `tree` 指令的效果
- 手撕一个简单的`v-if` 指令
- 手撕 Promise



## 刷题


我备赛期间，并没有拿到最近一两年的完整的省赛、国赛真题（当时真的动用了各种搜索引擎和AI）（可能是这个赛道确实很冷门），只拿到了零碎的真题



[往期比赛 - 蓝桥云课](https://www.lanqiao.cn/contests/history/) 这个网站里面有一些完整的web模拟题套卷，建议在即将比赛的前一两个星期做几套，限时训练。

我做过三套，感受：模拟题的质量比真题低很多。在有真题的情况下还是刷真题吧。



