
<script>
import tmp from "../mp/index";
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
    [Button.name]: Button,
    [Row.name]: Row,
    [Field.name]: Field,
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
  methods: {}
};
</script>

<style scoped>

@import "./index.less";

</style>
