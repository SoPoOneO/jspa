var jspa = (function(){

    var create = function(container_id, data, render){

        var container = document.getElementById(container_id);

        var update = function(new_data){

            updateData(new_data);

            html = render(data);

            container.innerHTML = html;
        }

        var updateData = function(new_data){
            for(key in new_data){
                data[key] = new_data[key];
            }
        }
 
        update(data);

        return {
            update: update
        }
    }


    return {
        create: create
    }

}());