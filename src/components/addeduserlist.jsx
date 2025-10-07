const mockUsers = [
    { id: 1, name: 'Mamie Fowler', location: 'American Samoa' },
    { id: 2, name: 'Gavin Hunt', location: 'Georgia' }
];

const AddedUserList = () => {
    return (
        <div className='userlist'>
            {mockUsers.map(user => (
                <div key={user.id} className='userlist-item'>
                    <span className='userlist-text'>{user.name}, {user.location}</span>
                    <button className='btn btn-icon' aria-label='delete'>✖</button>
                </div>
            ))}
            <div className='userlist-footer'>
                <button className='btn btn-danger'>Clear All Users</button>
            </div>
        </div>
    )
}
export default AddedUserList;