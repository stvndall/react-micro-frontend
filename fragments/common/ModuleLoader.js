import _ from 'lodash'


const CurrentModules = {};

const CurrentFetching = {};

const Callbacks = {};

class Modules {

    constructor() {

    }

    callThemBack(name) {
        const callbacks = Callbacks[ name ];
        _.forEach(callbacks, (fn) => fn(CurrentModules[ name ]))
    }

    registerCallBack(name, callback) {
        if (Callbacks[ name ]) {
            Callbacks[ name ].push(callback);
            return;
        }
        Callbacks[ name ] = [ callback ];
    }

    fetchNew(name, url) {
        debugger;
        const callback = this.callThemBack;
        requireMore(url, name + 'entry', function (b) {
            debugger;
            const entry = b.entry;
            CurrentModules[ name ] = entry;
            delete CurrentFetching[ name ];
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
        Modules.CurrentModules.name = object;
    }

    Loader(name, url) {
        if (this.modules[ name ]) {
            return [ this.modules[ name ], () => {
            } ]
        }
        if (!CurrentFetching[ name ]) {
            this.modules.fetchNew(name, url)
        }
        const registerCallback = this.modules.registerCallBack;
        return [ null, function (fn) {
            registerCallback(name, fn)
        } ]
    }
}

// exports.registerMe = moduleLoader.interface.Register;
// exports.loadComponent = moduleLoader.interface.Loader;