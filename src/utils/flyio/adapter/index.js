

import h5 from './h5/index'
import wx from './wx/index'

// console.log('process.env.npm_config_platform', process.env.npm_config_platform);

// export default process.env.npm_config_platform === 'h5' ? h5 : wx


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
