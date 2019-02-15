/*
 * action 类型
 */
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/**
 * 其他的常量
 */
let nextTodoId = 0

/**
 * action 创建函数
 */
export const addTodo = text => {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}