'use client';
import { Provider } from 'react-redux';
import { mydata } from "@/app/redux/Store"

const Providers = ({ children }: any) => {
    return <Provider store={mydata} >
        {children}
    </Provider>
};

export default Providers;
