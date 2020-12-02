# Transfer

-   category: Components
-   family: DataEntry
-   chinese: 穿梭框
-   type: 基本

---

## Guide

### When To Use

Move the items in two panels in an intuitive way to select.

## API

### Transfer

| Param | Descripiton  | Type  | Default Value |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------- |
| mode                | move mode<br><br>**options**:<br>'normal', 'simple'                                                                                                                                                                                                                                                                                                                                                 | Enum                | 'normal'                                                              |
| dataSource          | data source                                                                                                                                                                                                                                                                                                                                                                                          | Array&lt;Object>    | \[]                                                                   |
| value               | (under controll) current value                                                                                                                                                                                                                                                                                                                                                                                   | Array&lt;String>    | -                                                                     |
| defaultValue        | (under uncontroll) default value                                                                                                                                                                                                                                                                                                                                                                                  | Array&lt;String>    | \[]                                                                   |
| onChange            | callback function triggered when value change<br><br>**signatures**:<br>Function(value: Array, data: Array, extra: Object) => void<br>**params**:<br>_value_: {Array} value of right panel<br>_data_: {Array} data of right panel<br>_extra_: {Object} extra parmas<br>_extra.leftValue_: {Array} value of left panel<br>_extra.leftData_: {Array} data of left panel<br>_extra.movedValue_: {Array} moved value<br>_extra.movedData_: {Object} moved data<br>_extra.direction_: {String} move direction, 'left' or 'right' | Function            | -                                                                     |
| itemRender          | item render function<br><br>**signatures**:<br>Function(data: Object) => ReactNode<br>**params**:<br>_data_: {Object} data<br>**returns**:<br>{ReactNode} content of item<br>                                                                                                                                                                                                                                                         | Function            | data => data.label                                                    |
| showSearch          | whether to show the search box                                                                                                                                                                                                                                                                                                                                                                                      | Boolean             | false                                                                 |
| filter              | custom search function<br><br>**signatures**:<br>Function(searchedValue: String, data: Object) => Boolean<br>**params**:<br>_searchedValue_: {String} search keyword<br>_data_: {Object} data<br>**returns**:<br>{Boolean} whether is matched<br>                                                                                                                                                                                                   | Function            | filter by label                                                         |
| onSearch            | callback function triggered when search<br><br>**signatures**:<br>Function(searchedValue: String, position: String) => void<br>**params**:<br>_searchedValue_: {String} search keyword<br>_position_: {String} position of the search box                                                                                                                                                                                                                      | Function            | () => {}                                                              |
| searchPlaceholder   | placeholder of the search box                                                                                                                                                                                                                                                                                                                                                                                       | String              | -                                                                     |
| notFoundContent     | content when list is empty                                                                                                                                                                                                                                                                                                                                                                                     | ReactNode           | 'Not Found'                                                           |
| titles              | titles of left and right panel                                                                                                                                                                                                                                                                                                                                                                                       | Array&lt;ReactNode> | \[]                                                                   |
| operations          | text of move buttons                                                                                                                                                                                                                                                                                                                                                                                 | Array&lt;ReactNode> | [&lt;Icon type="arrow-right" /&gt;, &lt;Icon type="arrow-left" /&gt;] |
| defaultLeftChecked  | default checked value of left panel                                                                                                                                                                                                                                                                                                                                                                                     | Array&lt;String>    | \[]                                                                   |
| defaultRightChecked | default checked value of right panel                                                                                                                                                                                                                                                                                                                                                                                     | Array&lt;String>    | \[]                                                                   |
| listClassName       | custom list class name                                                                                                                                                                                                                                                                                                                                                                                | String              | -                                                                     |
| listStyle           | custom list style                                                                                                                                                                                                                                                                                                                                                                                | Object              | -                                                                     |
| sortable            | whether to allow drag and drop sort                                                                                                                                                                                                                                                                                                                                                                                     | Boolean             | false                                                                 |
| onSort              | callback function triggered when dragging sort<br><br>**signatures**:<br>Function(value: Array, position: String) => void<br>**params**:<br>_value_: {Array} sorted value<br>_position_: {String} position of the sorted panel, 'left' or 'right'                                                                                                                                                                                                                        | Function            | -                                                                     |
| disabled            | disable operations on transfer                                                                                                                                                                                                                                                                                                                                                                | Boolean            | false                                                              |
| leftDisabled        | disable left panel                                                                                                                                                                                                                                                                                                                                                                            | Boolean            | false                                                              |
| rightDisabled       | disable right panel                                                                                                                                                                                                                                                                                                                                                                           | Boolean            | false                                                              |
| id                  | unique id to make component accessible                                                                                                                                                                                                                                                                                                                                                                      | String              | -                                                                     |
| children            | customer panel<br><br>**signatures**:<br>Function(props: TransferPanelProps) => ReactNode                                                                                                                                                                                                                                                                                                                                     | Function            | -                                                                     |
| useVirtual          | whether use virtual | Boolean         | false         |
| showCheckAll | whether show footer's check-all checkbox | Boolean | true  |

## ARIA and KeyBoard

| KeyBoard          | Descripiton                              |
| :---------- | :------------------------------ |
| Up Arrow  | Get the previous item focus of the current item   |
| Down Arrow | Get the next item focus of the current item  |
| Enter       | the item selected in the current list to move to another list         |
| Space       | Select or cancel the current item or the item selected in the current list to move to another list    |


