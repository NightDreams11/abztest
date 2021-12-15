import React from 'react'
import styles from './Users.module.scss'
import cont from '../../App.module.scss';
import userIMG from '../../img/Photo-cover.svg'
import Button from '../Button/Button';
import preloader from '../../img/rolling.svg'

const img = 'https:\/\/frontend-test-assignment-api.abz.agency\/images\/placeholders\/placeholder.png'

const Users = (props) => {
    const showMore = () => {
        let clickCounter = props.pageNumber;
        props.getUsers(clickCounter, props.usersPage);
    }

    let stringWidth = document.querySelector('#userName')
    console.log(stringWidth);

    return <section className={styles.users} id='users'>
        <div className={cont.container}>
            <div className={styles.container_inner}>
                <h1 className={styles.title}>
                    Our cheerful users
                </h1>
                <h2 className={styles.title_h2}>
                    The best specialists are shown below
                </h2>
                <div className={styles.users_container}>
                    {props.isFetching ? <div className={styles.usersPreloader}><img src={preloader} /></div> : null}
                    {props.users.sort((a, b) => a.registration_timestamp > b.registration_timestamp ? -1 : 1).map(u => <div className={styles.users_item} key={u.id}>
                        <div className={styles.users_container_inner}>
                            <img src={u.photo != img ? u.photo : userIMG} className={styles.photo} />
                            <h2 className={styles.name} id='userName'>
                                {u.name}
                            </h2>
                            <div className={styles.position}>
                                <div className={styles.position}>{u.position}</div>
                                <div className={styles.position}>{u.email}</div>
                                <div className={styles.position}>{u.phone}</div>
                            </div>
                        </div>
                    </div>)}
                </div>
                <div className={styles.button}>
                    {/* {props.usersPage.length != serverUsers.length ? <Button text={'Show more'} onClick={showMore}></Button> : <DisabledButton></DisabledButton>} */}
                    <Button text={'Show more'} disabled={props.isFullUsers} onClick={showMore}></Button>
                </div>
            </div>
        </div>
    </section>
}

export default Users;