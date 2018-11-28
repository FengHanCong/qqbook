/**
 * Created by main on 2018/11/9.
 */
import 'muse-ui/lib/styles/base.less'
import {
  Avatar,
  AppBar,
  BottomNav,
  Button,
  Drawer,
  Divider,
  Helpers,
  Form,
  Tabs,
  TextField,
  Icon,
  List,
  LoadMore,
  Menu,
  Progress,
  SubHeader
}
  from 'muse-ui'

const components = [Avatar, AppBar, BottomNav, Button, Drawer, Divider, Helpers, Form, Tabs, TextField, Icon, List, LoadMore, Menu, Progress, SubHeader]

export default {
  // Vue.use 会触发一个名叫install触发并接受Vue对象作为第一个参数
  install(Vue) {
    components.forEach(c => Vue.use(c))
  }
}
