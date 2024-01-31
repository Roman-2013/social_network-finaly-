import React from 'react'
import {Button} from 'antd';
import { create } from 'react-test-renderer';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import {ProfileStatus} from './ProfileStatus';



describe('ProfileStatusWithHooks component',()=>{
    test('status should be in the state',()=>{
        const component=create (<ProfileStatus updateProfileStatusTC={()=>{}} status={'status'}/>)
        const instance:any=component.getInstance()
        expect(instance.state.status).toBe('status')
    })
})

test('find tag span',()=>{
    const component=create (<ProfileStatus updateProfileStatusTC={()=>{}} status={'Mystatus'}/>)
    const instance=component.root

    const span=instance.findByType('span')
    expect(span).not.toBeNull()
})


test('find tag input',()=>{
    const component=create (<ProfileStatus updateProfileStatusTC={()=>{}} status={'Mystatus'}/>)
    const instance=component.root
    expect(()=>instance.findByType('input')).toThrow()
})


test('children span ',()=>{
    const component=create (<ProfileStatus updateProfileStatusTC={()=>{}} status={'My status'}/>)
    const instance=component.root

    const span=instance.findByType('span')
    expect(span.children[0]).toBe('My status')
})

test('change editMode ',()=>{
    const component=create (<ProfileStatus updateProfileStatusTC={()=>{}} status={'My status'}/>)
    const instance=component.root
    const span=instance.findByType('span')
    span.props.onDoubleClick()
    const input =instance.findByType('input')
    expect(input.props.value).toBe('My status')
})