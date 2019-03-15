
const moduleLoader = {
    modules : {},
    Register : function(name, object){
        this.modules.name = object;
    },
    Loader : function(name){
        if(this.modules[name]){
            return [this.modules[name], () => {}]
        }
        return [null, function(fn){

        }]
    }
};



exports.registerMe = moduleLoader.Register;