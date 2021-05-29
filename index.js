let arr = [];

function findZero(){
    for(let i in arr){
        for(let j in arr){
            if(arr[i][j] === '0'){
                return [i,j];
            }
        }
    }
}
function findWay(height, width){
    let checked = [];
    let way = [];
    go(+height, +width, checked,way);
}
function go(height, width, checked,way){
    checked.push(String(height) + String(width));
    console.log(checked);
    let res;
    res = checkAround(height, width, checked);
    for(let i of res){
        switch (i){
            case 'top':
                console.log('go top');
                way.push('\'top\'');
                if(go(height - 1, width, checked,way)){
                    return true;
                }
                way.pop();
                console.log('go back');
                break;
            case 'bottom':
                console.log('go bot');
                way.push('\'bottom\'');
                if(go(height + 1, width, checked,way)){
                    return true;
                }
                way.pop();
                console.log('go back');
                break;
            case 'left':
                console.log('go left');
                way.push('\'left\'');
                if(go(height, width - 1, checked,way)){
                    return true;
                }
                way.pop();
                console.log('go back');
                break;
            case 'right':
                console.log('go right');
                way.push('\'right\'');
                if(go(height, width + 1, checked,way)){
                    return true;
                }
                way.pop();
                console.log('go back');
                break;
        }
    }
    if(height == 0 || height == arr.length - 1  || width == 0 || width == arr[height].length - 1){
        $('#out').val('[' + way + ']');
        return true;
    }else{
        return false;
    }
}
function checkAround(height, width, checked){
    let res = [];
    console.log(height,width);
    if(arr[height + 1][width] == '+' && checked.indexOf(String(height + 1) + String(width)) == -1){
        res.push('bottom');
    }
    if(arr[height - 1][width] == '+' && checked.indexOf(String(height - 1) + String(width)) == -1){
        res.push('top');
    }
    if(arr[height][width + 1] == '+' && checked.indexOf(String(height) + String(width + 1)) == -1){
        res.push('right');
    }
    if(arr[height][width - 1] == '+' && checked.indexOf(String(height) + String(width - 1)) == -1){
        res.push('left');
    }
    return res;
}
$(function (){
    $('#check').click(() =>{
        let strArr =$('#in').val();
        strArr = strArr.replace(/\[/g,"");
        strArr = strArr.replace(/\'/g,"");
        strArr = strArr.replace(/\s/g,"");
        $('#in').val('');
        arr = strArr.split('],');
        arr.pop();

        for (let i in arr){
            arr[i] = arr[i].split(',');
        }
        for (let i of arr){
            console.log(i);
            console.log('end');
        }
        let zero = findZero()
        findWay(zero[0],zero[1]);
    });
});
