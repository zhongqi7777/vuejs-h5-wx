
<script>
import { getMenu } from "@/api/index";
import home from "../mp/index";
import { Button, Toast } from "vant";
export default {
  extends: home,
  components: {
    [Button.name]: Button
  }
};
</script>