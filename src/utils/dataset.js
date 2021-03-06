import { loadStorage, saveStorage } from './storage'

/**
 * File 오브젝트에서 실제 내용을 읽어온다.
 * @param {File} 파일
 */
function readFileContent(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.onload = evt => {
            resolve(evt.target.result)
        }
        try {
            reader.readAsText(file)
        } catch (error) {
            reject(error)
        }
    })
}

/**
 * Dataset을 File 오브젝트에서 불러온다.
 * @param {File} 파일
 */
export async function readDataset(file) {
    const rawtext = await readFileContent(file)
    const data = JSON.parse(rawtext)

    return data
}

function randomKey() {
    return Math.ceil(Math.random() * 10e5)
}

export function getDatasetList() {
    return loadStorage('dataset-meta', {})
}

export function getDataset(key) {
    return loadStorage(`dataset-${key}`, {})
}

export function removeDataset(key) {
    console.log(key)
    const datasets = loadStorage('dataset-meta', {})

    delete datasets[key]

    saveStorage('dataset-meta', datasets)
    localStorage.removeItem(`dataset-${key}`)
}

export function saveDataset(dataset) {
    const datasets = loadStorage('dataset-meta', {})

    const keys = Object.keys(datasets)

    let newkey
    do {
        newkey = randomKey()
    } while (keys.includes(newkey))

    datasets[newkey] = {
        school: dataset.school,
        timespan: dataset.timespan,
    }

    saveStorage('dataset-meta', datasets)
    saveStorage(`dataset-${newkey}`, dataset)
}
