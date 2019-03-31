export default [
    {
        path: '/',
        exact: true,
        screen: 'Login'
    },
    {
        path: '/admin',
        exact: true,
        screen: 'Dashboard'
    },
    {
        path: '/admin/users',
        screen: 'Users'
    },
    {
        path: '/admin/event',
        screen: 'Event'
    },
    {
        path: '/admin/tambah-event',
        screen: 'FormEvent'
    },
    {
        path: '/admin/edit-event/:id',
        screen: 'EditEvent'
    },
    {
        path: '/admin/pariwisata',
        screen: 'Pariwisata'
    },
    {
        path: '/admin/tambah-pariwisata',
        screen: 'FormPariwisata'
    },
    {
        path: '/admin/history',
        screen: 'HistoryPemenang'
    }

]