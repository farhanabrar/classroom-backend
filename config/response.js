exports.success = (response)=> {
    const { msg, data} = response;
    return {
        success: true,
        message: msg ? msg:"succesfull",
        data: data ? data: [],
    };
};

exports.fail = (response)=> {
    const { msg, data} = response;
    return {
        success: false,
        message: msg ? msg:"failed",
        data: data ? data: [],
    };
};