import React from "react";

import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {useEffect, useState} from "react";
import {cleanObject, useDebounce, useMount} from "../../utils";
import {stringify} from 'qs';

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })

    const debounceParam = useDebounce(param, 2000);
    const [list, setList] = useState([])
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`${apiUrl}/projects?${stringify(cleanObject(debounceParam))}`).then(async res => {
            if (res.ok) {
                setList(await res.json())
            }
        })
    }, [debounceParam])
    useMount(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if (res.ok) {
                setUsers(await res.json())
            }
        })
    });

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List list={list} users={users}/>
    </div>
}