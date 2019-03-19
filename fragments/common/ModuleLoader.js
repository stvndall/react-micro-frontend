import _ from 'lodash'


const CurrentModules = {};

const CurrentFetching = {};

const Callbacks = {};

class Modules {

    constructor() {

    }

    callThemBack(name) {
        const callbacks = Callbacks[name];
        _.forEach(callbacks, (fn) => fn(CurrentModules[name]))
    }

    registerCallBack(name, callback) {
        if (Callbacks[name]) {
            Callbacks[name].push(callback);
            return;
        }
        Callbacks[name] = [callback];
    }

    fetchNew(name, url) {
        const callback = this.callThemBack;
        requireMore(url, name + 'entry', function (b) {
            const entry = b.entry;
            CurrentModules[name] = entry;
            delete CurrentFetching[name];
            callback(name);
            return entry;
        });
    }
}


export class moduleLoader {

    modules;

    constructor() {
        this.modules = new Modules()
    }

    Register(name, object) {
        CurrentModules[name] = object;
        if (CurrentFetching[name]) {
            delete CurrentFetching[name]
            if (Callbacks[name]) {
                const callbacks = Callbacks[name]
                while (i = callbacks.pop()) {
                    i(object)
                }
                delete Callbacks[name]
            }
        }
    }

    Loader(name, url, fn) {
        if (CurrentModules[name]) {
            return CurrentModules[name]
        }
        if (!CurrentFetching[name]) {
            CurrentFetching[name] = name;
            this.modules.fetchNew(name, url)
        }
        const registerCallback = this.modules.registerCallBack;
        registerCallback(name, fn)
        return null
            
        
    }
}

// exports.registerMe = moduleLoader.interface.Register;
// exports.loadComponent = moduleLoader.interface.Loader;