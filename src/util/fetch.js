
const Fetch = (url, opt = {}) => {
    const defaultOpt = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'get',
        credentials: 'include',
    };
    const nextOpt = {
        ...defaultOpt,
        ...opt
    };
    nextOpt.method = nextOpt.method.toUpperCase();
    return fetch(url, nextOpt).then(ret => ret.json());
};

Fetch.post = (url, options = {}) => {
    const nextOpt = options;
    nextOpt.method = 'post';
    return fetch(url, nextOpt);
};

export default Fetch;
