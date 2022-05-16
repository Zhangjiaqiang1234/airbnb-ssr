/* 用于处理 indexDB 本地数据库的 */

export default class DB {
  /* 数据库名称 */
  private dbName: string;
  /* 数据库对象 */
  private db: any;

  constructor(dbName: string) {
    this.dbName = dbName;
  }

  /**
   * 打开数据库
   * @param {string} storeName: 存储对象名称
   * @param {string} keyPath: 主键名，唯一key名称
   * @param {array} indexs: 索引数组
   */
  public openStore(storeName: string, keyPath: string, indexs?: Array<string>) {
    /* 参数： 1、数据库名称 2、数据库版本，注意：这里的数据库版本只能逐渐增加，不能减少 */
    const request = window.indexedDB.open(this.dbName, 1);
    return new Promise(() => {
      request.onsuccess = (event: any) => {
        console.log('数据库打开成功');

        this.db = event.target.result;

        console.log(event);
      };

      request.onerror = (event) => {
        console.log('数据库打开失败');

        console.log(event);
      };

      /* 数据库版本升级时触发 */
      request.onupgradeneeded = (event) => {
        /* 如果是第一次打开数据库的时候，会先执行1次 onupgradeneeded ,然后再执行 onsuccess */

        console.log('数据库升级成功');

        console.log(event);

        const { result }: any = event.target;
        /* 创建存储对象，这个相当于数据库中的一个表，一个数据库可以创建多个对象仓库 */
        const store = result.createObjectStore(storeName, {
          autoIncrement: true,
          keyPath,
        });

        if (indexs?.length) {
          /* 遍历创建索引 */
          indexs.map((v: string) => {
            /* 创建索引：1、参数名称 2、索引属性 3、配置对象 */
            return store.createIndex(v, v, { unique: false });
          });
        }

        store.transaction.oncomplete = (e: any) => {
          console.log('创建对象仓库成功');
          console.log(e);
        };
        console.log(event);
      };
    });
  }

  /**
   * 新增/修改数据库数据
   * @param {string} storeName: 存储对象名称
   * @param {object} data: 需要修改的数据
   */
  updateItem(storeName: string, data: any) {
    /* 新增数据也就是将数据写入到数据仓库中 */

    /* 新建一个事务，第2个参数：操作模式：是只读的还是读写 */
    const store = this.db
      .transaction([storeName], 'readwrite')
      .objectStore(storeName);
    const request = store.put({ ...data, updateTime: new Date().getTime() });
    /* 写入成功触发 */
    request.onsuccess = (event: any) => {
      console.log('数据写入成功');
      console.log(event);
    };

    /* 写入失败触发 */
    request.onerror = (event: any) => {
      console.log('数据写入失败');
      console.log(event);
    };
  }

  /**
   * 删除数据库数据
   * @param {string} storeName: 存储对象名称
   * @param {number | string} key: 主键
   */
  deleteItem(storeName: string, key: number | string) {
    /* 新增数据也就是将数据写入到数据仓库中 */

    /* 新建一个事务，第2个参数：操作模式：是只读的还是读写 */
    const store = this.db
      .transaction([storeName], 'readwrite')
      .objectStore(storeName);
    const request = store.delete(key);
    /* 写入成功触发 */
    request.onsuccess = (event: any) => {
      console.log('删除成功');
      console.log(event);
    };

    /* 写入失败触发 */
    request.onerror = (event: any) => {
      console.log('删除失败');
      console.log(event);
    };
  }

  /**
   * 查询所有数据
   * @param {string} storeName: 存储对象名称
   *
   */
  getList(storeName: string) {
    /* 新增数据也就是将数据写入到数据仓库中 */

    /* 新建一个事务，第2个参数：操作模式：是只读的还是读写 */
    const store = this.db
      .transaction(storeName)
      .objectStore(storeName);
    const request = store.getAll();

    return new Promise((resolve) => {
      /* 写入成功触发 */
      request.onsuccess = (event: any) => {
        console.log('查询所有数据成功');
        console.log(event.target.result);
        resolve(event.target.result);
      };

      /* 写入失败触发 */
      request.onerror = (event: any) => {
        console.log('查询所有数据失败');
        console.log(event);
      };
    });
  }

  /**
   * 查询某一条数据
   * @param {string} storeName: 存储对象名称
   * @param {number | string} key: 主键
   */
  getItem(storeName: string, key: number | string) {
    /* 新增数据也就是将数据写入到数据仓库中 */

    /* 新建一个事务，第2个参数：操作模式：是只读的还是读写 */
    const store = this.db
      .transaction(storeName)
      .objectStore(storeName);
    const request = store.get(key);
    /* 写入成功触发 */
    request.onsuccess = (event: any) => {
      console.log('查询某一条数据成功');
      console.log(event.target.result);
    };

    /* 写入失败触发 */
    request.onerror = (event: any) => {
      console.log('查询某一条数据失败');
      console.log(event);
    };
  }
}
