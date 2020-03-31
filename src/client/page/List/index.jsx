import React from 'react'

const list = [
    {id: 1, title: '这是第一条数据'},
    {id: 2, title: '这是第二条数据'},
    {id: 3, title: '这是第三条数据'},
    {id: 4, title: '这是第四条数据'},
    {id: 5, title: '这是第五条数据'},
]

export default function List() {
    return (
        <div>
            {
                list.map(item => <div key={item.id}>{item.title}</div>)
            }
        </div>    
    )
}
