
<script>
    // "van-row": "/static/vant/row/index",
    // "van-col": "/static/vant/col/index",
    // "van-tab": "/static/vant/tab/index",
    // "van-tabs": "/static/vant/tabs/index",
    // "van-cell-group": "/static/vant/cell-group/index",
    // "van-field": "/static/vant/field/index",
    // "van-button": "/static/vant/button/index"
import tmp from "../base/index";
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Row,
  Field,
  Tab,
  Tabs,
  Button
} from "vant";
export default {
  extends: tmp,
  components: {
    [Button.name]:Button,
    [Row.name]:Row,
    [Field.name]:Field,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  methods: {
  }
};
</script>
