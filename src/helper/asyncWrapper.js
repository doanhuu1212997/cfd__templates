import { toast } from "react-toastify";
// import { hide, show } from "components/Loading/loadingSlice";
export const styleToast = { position: "top-center", autoClose: 3000 };

export const asyncGetList = async (fn, params = null) => {
    try {
        const res = await fn(params);
        if (!res.data.success) {
            toast.error(`⚠ ${res.data.message}`, styleToast);
        }
        return res;
    } catch (e) {
        let errors = e.response.data;
        if ("errors" in errors)
            Object.values(errors.errors).forEach(function (error) {
                toast.error(`⚠ ${error[0]}`, styleToast);
            });
        else
            toast.error(
                `⚠ ${"message" in errors ? errors.message : ""}`,
                styleToast
            );
        return errors;
    }
};

export const asyncWrapper = async (fn, params = null) => {
    let st = require("store/store");
    let store = st.default;
    try {
        // store.dispatch(show());
        const res = await fn(params);
        if (!res.data) {
            toast.error(`⚠ ${res.errors}`, styleToast);
        }
        // store.dispatch(hide());

        return res;
    } catch (e) {
        // store.dispatch(hide());

        let errors = e?.response?.data.errors
        if (errors) {
            toast.error(`⚠ ${errors}`, styleToast);
        }

        return errors;
    }
};

export const asyncCreate = async (fn, params = null, mess) => {
    let st = require("store/store");
    let store = st.default;
    try {
        // store.dispatch(show());
        const res = await fn(params);
        if (!res.data) {
            toast.error(`⚠ ${res.error}`, styleToast);
        } else {
            toast.success(`${mess
                }`, styleToast);
        }
        // store.dispatch(hide());
        return res;
    } catch (e) {
        // store.dispatch(hide());
        let errors = e?.response?.data.errors

        if (errors) {
            console.log(errors[0])
            toast.error(`⚠ ${errors}`, styleToast);
        }
        return errors;
    }
};

export const asyncUpdate = async (fn, params = null) => {
    let st = require("store/store");
    let store = st.default;
    try {
        // store.dispatch(show());
        const res = await fn(params);
        if (!res.data.success) {
            toast.error(`⚠ ${res.data.message}`, styleToast);
        } else {
            toast.success("Cập nhật thành công!", styleToast);
        }
        // store.dispatch(hide());
        return res;
    } catch (e) {
        // store.dispatch(hide());
        let errors = e?.response ? e.response.data : e;
        if ("errors" in errors) {
            Object.values(errors.errors).forEach(function (error) {
                toast.error(`⚠ ${error[0]}`, styleToast);
            });
        } else {
            toast.error(
                `⚠ ${"message" in errors ? errors.message : ""}`,
                styleToast
            );
        }
        return errors;
    }
};

export const asyncDelete = async (fn, params = null) => {
    let st = require("store/store");
    let store = st.default;
    try {
        // store.dispatch(show());
        const res = await fn(params);
        if (!res.data.success) {
            toast.error(`⚠ ${res.data.message}`, styleToast);
        } else {
            toast.success("Xóa thành công!", styleToast);
        }
        // store.dispatch(hide());
        return res.data;
    } catch (e) {
        // store.dispatch(hide());
        let errors = e?.response ? e.response.data : e;
        if ("errors" in errors) {
            Object.values(errors.errors).forEach(function (error) {
                toast.error(`⚠ ${error[0]}`, styleToast);
            });
        } else {
            toast.error(
                `⚠ ${"message" in errors ? errors.message : ""}`,
                styleToast
            );
        }
        return errors;
    }
};
