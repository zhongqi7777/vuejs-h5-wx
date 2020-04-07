import h5 from "./h5";
import wx from "./wx";

const getProjectName = val => {
    switch (val) {
        case "h5":
            return h5;
        case "wx":
            return wx;
        default:
        //return h5;
    }
};

let result = process.env.mpvuePlatform || mpvuePlatform;
export default getProjectName(result);
