import {
    StrikethroughOutlined,
    FontColorsOutlined,
    MediumOutlined,
} from '@ant-design/icons';
import Request from '../request.ts';

let request = new Request({});
const getMenuList = function() {
    request.get('/api/apps').then(function(resData){
        let menuOptionsList = []
        for(let i in resData){
          menuOptionsList.push(
            {
              label: resData[i].name,
              value: resData[i].id,
              title: resData[i].name,
              subTitle:'sub'+(Number(i)+1),
              icon:<MediumOutlined />,
              children:[],
            }
          )
          if(resData[i].menu.length > 0){
            let menuList = []
            for(let j in resData[i].menu){
              menuList.push(
                {
                  value:resData[i].menu[j],
                  label:resData[i].menu[j],
                  title:resData[i].menu[j],
                  id:(Number(j)+1),
                  key:(Number(j)+1),
                  "children": "",
                }
              )
            }
            menuOptionsList[i].children = menuList
          }
        }
        return menuOptionsList
    })
}
export default getMenuList();