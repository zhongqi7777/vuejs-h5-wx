
<script>
import tmp from "../template/index";
import { Button } from "vant";
export default {
  extends: tmp,
  components: {
    tmp,
    [Button.name]: Button
  }
};
</script>