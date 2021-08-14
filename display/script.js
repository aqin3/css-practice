const flexDirectionList = ['row', 'row-reverse', 'column', 'column-reverse']
const flexWrapList = ['nowrap', 'wrap', 'wrap-reverse']
let flexDirectionCount = 1
let flexWrapCount = 1

const flexDirectionText = document.getElementById('flex-direction-text')
const flexDirection = document.getElementById('flex-direction')
const flexDirectionButton = document.getElementById('flex-direction-button')

const flexWrapText = document.getElementById('flex-wrap-text')
const flexWrapButton = document.getElementById('flex-wrap-button')
const flexWrap = document.getElementById('flex-wrap')

flexDirectionButton.addEventListener('click', function() {
    if (flexDirectionCount < 4) {
        flexDirectionText.innerText = flexDirectionList[flexDirectionCount]
        flexDirection.style.flexDirection = flexDirectionList[flexDirectionCount]
        flexDirectionCount++
    } else {
        flexDirectionCount = 0
        flexDirectionText.innerText = flexDirectionList[flexDirectionCount]
        flexDirection.style.flexDirection = flexDirectionList[flexDirectionCount]
        flexDirectionCount++
    }
})

flexWrapButton.addEventListener('click', function() {
    if (flexWrapCount < 3) {
        flexWrapText.innerText = flexWrapList[flexWrapCount]
        flexWrap.style.flexWrap = flexWrapList[flexWrapCount]
        flexWrapCount++
    } else {
        flexWrapCount = 0
        flexWrapText.innerText = flexWrapList[flexWrapCount]
        flexWrap.style.flexWrap = flexWrapList[flexWrapCount]
        flexWrapCount++
    }
})