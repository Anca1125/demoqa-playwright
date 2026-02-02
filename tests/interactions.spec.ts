import { test, expect } from '@playwright/test';

test.describe('Interactions', () => {

  test.beforeEach(async({page})=>{
await page.goto('https://demoqa.com/',
{
  waitUntil: 'domcontentloaded',
    timeout: 60000,
})
await page.locator('.card-body').filter({ hasText: 'Interactions' }).click()

})
test('sortable - display list ', async({page})=>{

await page.getByText('Sortable').click() 
await expect(page).toHaveURL('https://demoqa.com/sortable')   
        
const list = page.locator('#demo-tab-list')
const theList = page.locator('#demo-tabpane-list')
await list.click()
await expect(theList).toBeVisible()     
})

test('sortable - display grid ', async({page})=>{
await page.getByText('Sortable').click() 
await expect(page).toHaveURL('https://demoqa.com/sortable')   
        
const grid = page.locator('#demo-tab-grid')
const theGrid = page.locator('.create-grid')

await grid.click()
await expect(theGrid).toBeVisible()    
})

test('selectable - select item from list ', async({page})=>{

await page.getByText('Selectable').click() 
await expect(page).toHaveURL('https://demoqa.com/selectable')   
        
const listSelectable = page.locator('#demo-tab-list')
const selectedItem = page.getByText('Cras justo odio')

await listSelectable.click()
await selectedItem.click()
await expect(selectedItem).toHaveClass(/active/)     
})

test('selectable - select item from grid ', async({page})=>{
await page.getByText('Selectable').click() 
await expect(page).toHaveURL('https://demoqa.com/selectable')   
        
const selectableGrig = page.locator('#demo-tab-grid')
const selectedGridItem = page.getByText('Five')

await selectableGrig.click()
await selectedGridItem.click()
await expect(selectedGridItem).toHaveClass(/active/)   
})

test('selectable - aria selected active ', async({page})=>{
await page.getByText('Selectable').click() 
 await expect(page).toHaveURL('https://demoqa.com/selectable')   
        
const itemFirst = page.getByText('Cras justo odio')

await itemFirst.click()
await expect(itemFirst).toHaveClass(/active/)       
})

test('selectable - should select multiple items ', async({page})=>{
await page.getByText('Selectable').click() 
await expect(page).toHaveURL('https://demoqa.com/selectable')   
await page.locator('#demo-tab-grid').click()
        //const gridSection = page.locator('#demo-tab-grid')
const gridItems = ['One', 'Three', 'Five']
        //await page.gridSection.click()
     
for (const item of gridItems){
        await page.getByText(item).click()
}
for (const item of gridItems){
        await expect(page.getByText(item)).toHaveClass(/active/)

}
})

test.skip('resizable - resizable box with restriction ', async({page})=>{

await page.getByText('Resizable').click() 
await expect(page).toHaveURL('https://demoqa.com/resizable')   
        
const box = page.locator('#resizableBoxWithRestriction')
const handle = box.locator('.react-resizable-handle')
const before = await box.boundingBox()
const handleBox = await handle.boundingBox()

if(!handleBox || !before) return
   
await page.mouse.down()
await page.mouse.move(handleBox.x +80, handleBox.y + 80)
await page.mouse.up()

const after = await box.boundingBox()

expect(after!.width).toBeGreaterThan(before!.width)
expect(after!.width).toBeGreaterThan(before!.width)
})

test('droppable - simple', async({page})=>{

await page.getByText('Droppable').click()
await expect(page).toHaveURL('https://demoqa.com/droppable')

const simpleContainer = page.locator('#simpleDropContainer')
const dragMe = simpleContainer.locator('#draggable')
const droppedBox = simpleContainer.locator('#droppable')

await dragMe.dragTo(droppedBox)
await expect(droppedBox).toHaveText('Dropped!')
})

test('droppable - accept tab - acceptable is accepted', async({page})=>{

await page.getByText('Droppable').click()
await expect(page).toHaveURL('https://demoqa.com/droppable')
await page.getByRole('tab', { name: 'Accept' }).click()
        
const acceptPanel = page.getByRole('tabpanel', { name: 'Accept' })
const acceptable = acceptPanel.getByText('Acceptable', { exact: true })
const dropHere = acceptPanel.locator('#droppable')

await acceptable.dragTo(dropHere)
await expect(dropHere).toHaveText('Dropped!')            
})

test('droppable - accept tab - not acceptable isnot accepted', async({page})=>{

await page.getByText('Droppable').click()
await expect(page).toHaveURL('https://demoqa.com/droppable')
await page.getByRole('tab', { name: 'Accept' }).click()
        
const acceptPanel = page.getByRole('tabpanel', { name: 'Accept' })
const notAcceptable = acceptPanel.locator('#notAcceptable')
const dropHere = acceptPanel.locator('#droppable')

await notAcceptable.dragTo(dropHere)
await expect(dropHere).toHaveText('Drop here')        
})

test('droppable -  prevent propagation - greedy inner drop', async({page})=>{

await page.getByText('Droppable').click()
await expect(page).toHaveURL('https://demoqa.com/droppable')
await page.getByRole('tab', { name: 'Prevent Propogation' }).click()
        
const acceptPanel = page.getByRole('tabpanel', { name: 'Prevent Propogation' })
const dragBox = acceptPanel.getByText('Drag Me')
const innerDroppable = acceptPanel.locator('#notGreedyInnerDropBox')
const outerDroppable = acceptPanel.locator('#notGreedyDropBox')

await dragBox.dragTo(innerDroppable)
await expect(innerDroppable).toHaveText('Dropped!')
await expect(outerDroppable).toHaveText('Dropped!Dropped!')        
})

test.skip('droppable -  prevent propagation - not greedy outer drop', async({page})=>{

await page.getByText('Droppable').click()
await expect(page).toHaveURL('https://demoqa.com/droppable')
await page.getByRole('tab', { name: 'Prevent Propogation' }).click()
        
const acceptPanel = page.getByRole('tabpanel', { name: 'Prevent Propogation' })
const dragBox = acceptPanel.getByText('Drag Me')
const innerDroppable = acceptPanel.locator('#notGreedyInnerDropBox')
const outerDroppable = acceptPanel.locator('#notGreedyDropBox')

await dragBox.hover
await page.mouse.down()

const outerBox = await outerDroppable.boundingBox()
       if (!outerBox) return

await page.mouse.move(outerBox.x +10, outerBox.y +10)
await page.mouse.up()
        // await dragBox.dragTo(outerDroppable)
await expect(outerDroppable).toHaveText('Dropped!')
await expect(innerDroppable).toHaveText('Inner droppable (not greedy)')
             
})

test('droppable - revert draggable', async ({page})=> {

await page.getByText('Droppable').click()
await expect(page).toHaveURL('https://demoqa.com/droppable')
await page.getByRole('tab', { name: 'Revert Draggable' }).click()
        
const panel = page.getByRole('tabpanel', { name: 'Revert Draggable' })
const willRevert = panel.getByText('Will Revert')
const dropHere = panel.getByText('Drop here')
const before = await willRevert.boundingBox()
await willRevert.dragTo(dropHere)
await page.waitForTimeout(1000)
const after = await willRevert.boundingBox()

expect(after!.x).toBeCloseTo(before!.x, 1)
expect(after!.y).toBeCloseTo(before!.y)
})

test('droppable - not revert draggable', async ({page})=> {

await page.getByText('Droppable').click()
await expect(page).toHaveURL('https://demoqa.com/droppable')
await page.getByRole('tab', { name: 'Revert Draggable' }).click()
        
const panel = page.getByRole('tabpanel', { name: 'Revert Draggable' })
const notRevert = panel.getByText('Not Revert')
const dropHere = panel.getByText('Drop here')
const before = await notRevert.boundingBox()

await notRevert.dragTo(dropHere)
await page.waitForTimeout(1000)

const after = await notRevert.boundingBox()

expect(after!.x).not.toBeCloseTo(before!.x, 1)
expect(after!.y).not.toBeCloseTo(before!.y)
})
})