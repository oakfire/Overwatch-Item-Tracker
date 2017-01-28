// sprayRenamer.js
// After extracting sprays from the game into ./OverwatchAssets
// run this script which move all sprays and renames them to their IDS into ./toBeConverted
// where you can run the Photoshop script to convert to PNG
const fs = require('fs')

if (!process.cwd().match(/OverwatchAssets/)) {
  console.error("Needs to be run in OverwatchAssets")
  process.exit()
}

var getCleanID = what => {
  return what.toLowerCase().replace(/[öô]/g, 'o').replace('ú', 'u').replace('çã', 'ca').replace(/[^a-zA-Z 0-9]/g, '').replace(/ /g, '-').replace(/dds$/, '')
}

var getDirectories = where => {
  return new Promise((resolve, reject) => {
    fs.stat(where, err => {
      if (err) return reject(`${where} doesn't exist`)
      fs.readdir(where, (err, dirs) => {
        if (err) return reject("I dunno, no dirs??")
        return resolve(dirs.map(d => (d.startsWith('!') || d.endsWith('.js')) ? null : d).filter(Boolean))
      })
    })
  })
}

/*var createDirectorys = what => {
  return new Promise(resolve => {
    fs.stat(`./!toBeConverted/${what}`, err => {
      if (err) {
        fs.mkdirSync(`./!toBeConverted/${what}`)
        fs.stat(`./!toBeConverted/${what}/Icon`, err => err ? fs.mkdir(`./!toBeConverted/${what}/Icon`) : void 0)
        fs.stat(`./!toBeConverted/${what}/Spray`, err => err ? fs.mkdir(`./!toBeConverted/${what}/Spray`) : void 0)
        return resolve()
      } else return resolve()
    })
  })
}*/

fs.stat(`./!toBeConverted`, err => {
  if (err) {
    fs.mkdirSync(`./!toBeConverted`)
    fs.mkdirSync(`./!toBeConverted/Icon`)
    fs.mkdirSync(`./!toBeConverted/Spray`)
  }
})

getDirectories('./').then(heroDirs => {
  heroDirs.forEach(heroDir => {
    const dirID = getCleanID(heroDir)
    getDirectories(`./${heroDir}`).then(types => {
      types.map(type => {
        getDirectories(`./${heroDir}/${type}`).then(events => {
          events.map(event => {
            getDirectories(`./${heroDir}/${type}/${event}`).then(files => {
              files.forEach(file => {
                fs.createReadStream(`./${heroDir}/${type}/${event}/${file}`).pipe(fs.createWriteStream(`./!toBeConverted/${type}/${dirID}-${getCleanID(file)}.dds`));
              })
            })
          })
        })
      })
    })
  })
})
