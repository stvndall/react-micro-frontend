const moduleLoader = {

    modules: {},

    moduleFetcher: {
        currentFetching: {},

        callbacks: {},
        callThemBack: function (name) {
            const callbacks = this.moduleFetcher.callbacks[ name ];
            let i = 0;
            for (i; i < callbacks.length; i++) {
                callbacks[ i ](this.modules[ name ]);
            }
        },
        registerCallBack: function (name, callback) {
            if (this.moduleFetcher.callbacks[ name ]) {
                this.moduleFetcher.callbacks[ name ].push(callback);
                return;
            }
            this.moduleFetcher.callbacks[ name ] = [ callback ];
        },

        fetchNew: function (name, url) {
            fetch(url).then((function (file) {
                this.modules[ name ] = file;
                delete this.moduleFetcher.currentFetching[ name ];
                this.moduleFetcher.callThemBack(name);
            }.bind(this)))
        }


    },


    interface: {
        Register: function (name, object) {
            this.modules.name = object;
        },
        Loader: function (name, url) {
            if (this.modules[ name ]) {
                return [ this.modules[ name ], () => {
                } ]
            }
            if (!this.moduleFetcher.currentFetching[ name ]) {
                this.moduleFetcher.fetchNew(name, url)
            }
            const registerCallback = this.moduleFetcher.registerCallBack;
            return [ null, function (fn) {
                registerCallback(name, fn)
            } ]
        }
    }
};


exports.registerMe = moduleLoader.interface.Register;
exports.loadComponent = moduleLoader.interface.Loader;