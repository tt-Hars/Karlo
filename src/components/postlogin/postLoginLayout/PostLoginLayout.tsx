import React from 'react';
import { Stack } from 'react-bootstrap';
import { Outlet } from 'react-router';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';

function PostLoginLayout(){

    return (
        <Stack className="PostLogin">
            <Header />
                <Outlet />
            <Footer />
        </Stack>
    )
}

export default PostLoginLayout;