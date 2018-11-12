const io = require('socket.io-client')(`http://localhost:${global.port || 5000}`);
const storage = require('node-persist');

/**
 * This class is subscribed for the cache calls and returns cache value back to Socket IO on cache request.
 */
class CacheResolver {

    /** Runs cache resolver */
    run(){
        // subscribe for new cache request
        io.on('/get_cache', this.resolveCacheByDataId);
    }

    /**
     * Resolves the cache by Data ID and if founds, emits the value back to widget.
     * @param {*} dataId Data ID to resolve the cache to.
     */
    async resolveCacheByDataId(dataId){
        console.log(dataId);
    }
}

module.exports = new CacheResolver();