## ActtionSheet

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-action-sheet": "/components/ActionSheet/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-action-sheet visible="{{ visible }}" mask-closable="{{ false }}"></mit-action-sheet>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| title | 标题 | String | | false |
| visible | 用来显示action sheet | Boolean | false | false |
| mask-closable | 点击遮罩层是否可以关闭组件 | Boolean | false | false |
| options | 按钮标题列表	| Object | | ture |
| cancelButtonText | 取消按钮的文案	| String | 取消 | false |
| tapItem | 点击按钮的时间 | Function | | false |
## Alert 

提示框组件

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-alert": "/components/Alert/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-alert>
    ...
</mit-alert>
```

## API

|参数	    |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------:|:---------------:|:-------------:|:----------:|:---------:|:---:|
| text  | 内容   |  String  |   |   |  |
| warning | 警告样式提示框 | Boolean | false | false | true, false |
| error | 错误样式提示框 | Boolean | false | false | true, false |
| success | 成功样式提示框 | Boolean | false | false | true, false |
| closeable | 可关闭提示框 | Boolean | false | false | true, false |
## Avatar 

头像组件

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-avatar": "/components/Avatar/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-avtar>
    ...
</mit-avatar>
```

|参数 |说明 |类型 |默认值 |必须 |可选参数 |
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| src  |  头像图片地址   | String |   | false  |   |
| size  |  头像大小   | String  | 'default'  | true  | 'large', 'small', 'default', number   |
| noCircle |  是否圆头像   | Boolean  | false  | false  |    |
| border |  是否有边框   | Boolean  | false  | false  |    |

## Badge 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-badge": "/components/Badge/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-badge>
    ...
</mit-badge>
```

## API

|参数	    |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------:|:---------------:|:-------------:|:----------:|:---------:|:---:|
| number  | 徽章上的数字   |  Number  |   |   |  |
| flag | 是否加到其他组件上面 | Boolean | false | false | true, false |
| color | 自定义徽章颜色 | String | | | |

## Button

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-button": "/components/Button/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-button>
    ...
</mit-button>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 | 生效时机 |
|:-----------: |:---------------:| :-------------:| :--------: | :--------:|:-----:| :----:|
| size | 大小 | String | default | false | 'small', 'large', 'default'|
| circle | 是否圆按钮 | Boolean | default | false | true, false |
| text   | 按钮文字  | String  |  |  false  |   | 
| type  | 按钮类型 | String | false | 'primary' | 'primary', 'info', 'default', 'error', 'brand', 'brand-yellow', 'brand-red', 'brand-green', 'brand-blue', 'brand-dark-blue' |
| disabled   | 是否禁用  | Boolean  | false |  false  | true, false  |
| full   | 是否通栏  | Boolean  | false |  false  | true, false  |
| bottom   | 是否为底部通栏按钮  | Boolean  | false |  false  | true, false  |
| openType   | 微信开放能力  | String  |  |    |  
| sessionFrom   | 会话来源  | String  |  |    |  | openType="contact" |
| sendMessageTitle   | 会话内消息卡片标题  | String  |  |    | |  openType="contact" |
| sendMessagePath   | 会话内消息卡片点击跳转小程序路径  | String  |  |   | | openType="contact" |
| sendMessageImg   | 会话内消息卡片图片  | String  |  |   | |  openType="contact" |
| showMessageCard   | 显示会话内消息卡片  | String  |  |  |  |  openType="contact" |
| appParameter   | 打开 APP 时，向 APP 传递的参数  | String  |  |    | | openType="launchApp" |
| bindcontact   | 客服消息回调  | Function  |  |    | | openType="contact" |
| bindgetphonenumber   | 获取用户手机号回调 | Function  |  |    | | openType="getPhoneNumber" |
| binderror   | 当使用开放能力时，发生错误的回调  | Function  |  |    | | openType="launchApp" |
| bindopensetting   |在打开授权设置页后回调  | Function  |  |    | | openType="openSetting" |

## Card

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-card": "/components/Card/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-card>
    ...
</mit-card>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| full | 是否通栏 | Boolean | false | false |
## Cell

与Cell-Group配合使用 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-cell": "/components/Cell/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-cell>
    ...
</mit-cell>
```

|参数 |说明 |类型 |默认值 |必须 |可选参数 |
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| title  |  标题   | String |   | false  |   |
| label  |  辅助文字   | String  | false  | true  |    |
| isLink |  是否是链接   | Boolean  | false  | false  |    |
| url |  链接   | String  | false  | false  |    |

注意，在title为空是可以选择使用slot的方式进行渲染，可以在中间添加自己的代码

## Cell-Group

与Cell配合使用

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-cell-group": "/components/Cell-Group/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-cell-group>
    ...
</mit-cell-group>
```
## Checkbox

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-checkbox": "/components/Checkbox/index",
		"mit-checkbox-group": "/components/Checkbox-Group/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-checkbox-group bind:change="onCheckboxChange">
	<mit-checkbox title="西瓜" value="watermelon"></mit-checkbox>
	<mit-checkbox title="香蕉" value="banana"></mit-checkbox>
	<mit-checkbox title="苹果" value="apple"></mit-checkbox>
	<mit-checkbox title="梨" value="pear"></mit-checkbox>
</mit-checkbox-group>
```

## API

### Checkbox

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| title | 标题 | String | | true |
| value | checkbox的value值，当value为空时，取title值 | String | | false |
| checked | 默认选中 | Boolean | | false |
| disabled | 不取选 | Boolean | | false |

### Checkbox-Group

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| change | 点击的时候触发的时间 | Function | | false |
## Checkbox

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-checkbox": "/components/Checkbox/index",
		"mit-checkbox-group": "/components/Checkbox-Group/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-checkbox-group bind:change="onCheckboxChange">
	<mit-checkbox title="西瓜" value="watermelon"></mit-checkbox>
	<mit-checkbox title="香蕉" value="banana"></mit-checkbox>
	<mit-checkbox title="苹果" value="apple"></mit-checkbox>
	<mit-checkbox title="梨" value="pear"></mit-checkbox>
</mit-checkbox-group>
```

## API

### Checkbox

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| title | 标题 | String | | true |
| value | checkbox的value值，当value为空时，取title值 | String | | false |
| checked | 默认选中 | Boolean | | false |
| disabled | 不取选 | Boolean | | false |

### Checkbox-Group

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| change | 点击的时候触发的时间 | Function | | false |
## Drawer

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-drawer": "/components/Drawer/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-drawer>
    ...
</mit-drawer>
```

## API

|参数 |说明 |类型 |默认值 |必须 |可选参数 |
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| position  | 出现的位置    | String |   | true  | 'left','right'  |
| visible   | 可见性   | Boolean  | false  | true  | true, false   |
## Grid

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-grid": "/components/Grid/index",
		"mit-grid-item": "/components/Grid-Item/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-grid columnNum="3">
	<mit-grid-item>
		<view slot="icon"><mit-icon type="category" size="40" /></view>
		<view slot="title">我是一个分类</view>
	</mit-grid-item>
	<mit-grid-item>
		<view slot="icon"><mit-icon type="category" size="40" /></view>
		<view slot="title">我是一个分类</view>
	</mit-grid-item>
	<mit-grid-item>
		<view slot="icon"><mit-icon type="category" size="40" /></view>
		<view slot="title">我是一个分类</view>
	</mit-grid-item>
</mit-grid>
```

## API

### Grid

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| columnNum | 标题 | String | | true |

### Grid-Item

|参数	    	  |说明  			   |类型            |默认值     |必须  |
|:-----------: |:---------------:| :-------------:| :-------- | :--------|
| icon | icon | slot | | false |
| title | title | slot | | false |
## Input 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-input": "/components/Input/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-input>
    ...
</mit-input>
```


## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------: | :-----:|
| placeholder | 输入框内描述文字 | String |  | true  | |
| label | 左边文字 | String |  | false | |
| number | 是否使用数字键盘输入 | Boolean | false | false | |
| disabled | 禁用 | Boolean | false | false |  |
| value | 默认文字 | String |  | false |  |
| radius | 是否圆角 | Boolean | false | false |  |
| borderColor | 自选边框颜色 | Boolean | false | false |  |
| lengthLimit | 长度限制 | Number | false | false |  |
| confirmType | 键盘右下角完成文字 | String | "done"  |  |  |
| focus | 自动获取焦点 | Boolean | false | false |  |
| type | 文本框类型 | String | false | false | 'text', 'password', 'idcard', 'digit' |
| placeholderClass | placeholder类 | String | false | false | |
| placeholderStyle | placeholder样式 | String | false | false | |


## 事件
| 事件名称 | 说明 |
|:-------:|:---:|
| change  | 绑定变化时触发 |
| focus   | 获取焦点时触发 |
| blur    | 失焦时触发     |


## Modal 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-modal": "/components/Modal/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-modal>
    ...
</mit-modal>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------: | :-----:|
| visible | 是否可见 | Boolean |  | true  | true,false |
| title | 标题 | String |  | false | |
| vertical | 纵向按钮 | Boolean | false | false | |
| footer | 底部按钮 | Array | false | false |  |
| footer数组参数 |  |   |  |  |  |
| color | 底部按钮颜色 | String | false | false |  |
| text | 底部按钮文字 | String | false | false |  |
| event | 按钮上具体事件 | Function | false | false |  |
| closeable | 该按钮可否关闭对话框 | Boolean | false | false |  |



## NoticeBar 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-notice-bar": "/components/NoticeBar/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-notice-bar>
    ...
</mit-notice-bar>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------: | :-----:|
| text | 通知文字 | String |  | false  | |
| closeable | 是否可关闭 | Boolean | false | false | |
| transform | 是否可开启跑马灯 | Boolean | false | false | |

## Panel

与其他组件配合使用

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-panel": "/components/Panel/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-panel>
    ...
</mit-panel>
```

## API

|参数	    |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------:|:---------------:|:-------------:|:----------:|:---------:|:---:|
| title  | 标题   |  Boolean  | false  |  true |  |
| withoutBorder | 不带边框 | Boolean | false | false | true, false|
## Panel

与其他组件配合使用

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-panel": "/components/Panel/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-panel>
    ...
</mit-panel>
```

## API

|参数	    |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------:|:---------------:|:-------------:|:----------:|:---------:|:---:|
| title  | 标题   |  Boolean  | false  |  true |  |
| withoutBorder | 不带边框 | Boolean | false | false | true, false|
## Switch

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-switch": "/components/Switch/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-switch name="sw1"/>
```


## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------: | :-----:|
| name | name | String |  | true  | |
| large | 大小 | Boolean |  | false | |
| color | 自定义颜色 | String | false | false | |
| disabled | 禁用 | Boolean | false | false |  |


| 事件名称 | 说明 |
|:-------:|:---:|
| change  | 绑定变化时触发 |


## Tabs 

与Tabs-Cell配合使用 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-tabs": "/components/Tabs/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-tabs>
    ...
</mit-tabs>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------: | :-----:|
| brandColor | 自定义品牌色 | String |  | false  | |
| scroll | 是否可滑动 | Boolean | false | false | |

## Tabs-Cell 

与Tabs配合使用 

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-tabs-cell": "/components/Tabs-Cell/index"
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-tabs-cell>
    ...
</mit-tabs-cell>
```

## API

|参数	    	  |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------: |:---------------:| :-------------:| :-------- | :--------: | :-----:|
| active | 是否选中 | Boolean | false | false |

## Panel

与其他组件配合使用

## 使用指南

### Step 1

在页面对应的json文件中引入组件

```json
{
	"usingComponents": {
		"mit-panel": "/components/Panel/index",
	}
}
```
### Step 2

在wxml文件里添加组件代码

```html
<mit-panel>
    ...
</mit-panel>
```

## API

|参数	    |说明  			   |类型            |默认值     |必须  | 可选参数 |
|:-----------:|:---------------:|:-------------:|:----------:|:---------:|:---:|
| title  | 标题   |  Boolean  | false  |  true |  |
| withoutBorder | 不带边框 | Boolean | false | false | true, false|