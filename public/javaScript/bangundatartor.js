const parameters = document.querySelectorAll('.parameter'),
    answerLuasDisplay = document.querySelector('.luasAnswer'),
    answerKelilingDisplay = document.querySelector('.kelilingAnswer'),
    bentukBentuk = document.querySelectorAll('.bentuk'),
    hitungLuas = document.querySelectorAll('.hitungLuas'),
    hitungKeliling = document.querySelectorAll('.hitungKeliling')

luasSegitiga = (alas, tinggi) => {
    return answer = 0.5 * alas * tinggi
}

kelilingSegitiga = (a, b, c) => {
    return answer = a + b + c
}

luasPersegiPanjang = (p, l) => {
    return answer = p * l
}

kelilingPersegiPanjang = (p, l) => {
    return answer = 2 * (p + l)
}

luasPersegi = (s) => {
    return answer = Math.pow(s, 2)
}

kelilingPersegi = (s) => {
    return answer = 4 * s
}

luasTrapesium = (a, b, tinggi) => {
    return answer = 0.5 * (a + b) * tinggi
}

kelilingTrapesium = (a, b, c, d) => {
    return answer = a + b + c + d
}

luasLingkaran = (r) => {
    return answer = 3.14 * r * r
} 

kelilingLingkaran = (d) => {
    return answer = 3.14 * d
}

let alas, tinggi, panjang, lebar, sisi

parameters.forEach((parameter) => {
    parameter.addEventListener('input', function () {
        if (this.value !== '' && this.value !== ' ') {
            if (this.id === 'alas') {
                return alas = parseInt(this.value)
            } else if (this.id === 'tinggi') {
                return tinggi = parseInt(this.value)
            } else if (this.id === 'a') {
                return a = parseInt(this.value)
            } else if (this.id === 'b') {
                return b = parseInt(this.value)
            } else if (this.id === 'c') {
                return c = parseInt(this.value)
            } else if (this.id === 'sisi') {
                return sisi = parseInt(this.value)
            } else if (this.id === 'panjang') {
                return panjang = parseInt(this.value)
            } else if (this.id === 'lebar') {
                return lebar = parseInt(this.value)
            } else if (this.id === 'ab') {
                return a = parseInt(this.value)
            } else if (this.id === 'cd') {
                return b = parseInt(this.value)
            } else if (this.id === 'bc') {
                return c = parseInt(this.value)
            } else if (this.id === 'da') {
                return d = parseInt(this.value)
            } else if (this.id === 'r') {
                return r = parseInt(this.value)
            } else if (this.id === 'd') {
                return d = parseInt(this.value)
            }
        }
    })

    hitungLuas.forEach((luas) => {
        luas.addEventListener('click', () => {
            if (luas.id === 'luasSegitiga') {
                luasSegitiga(alas, tinggi)
                parameter.value = ''
                if (!answer) {
                    return
                }
                answerLuasDisplay.innerText = answer
            } else if (luas.id === 'luasPersegi') {
                luasPersegi(sisi)
                if (!answer) {
                    return
                }
                parameter.value = ''
                answerLuasDisplay.innerText = answer
            } else if (luas.id === 'luasPP') {
                luasPersegiPanjang(panjang, lebar)
                if (!answer) {
                    return
                }
                parameter.value = ''
                answerLuasDisplay.innerText = answer
            } else if (luas.id === 'luasTrapesium') {
                luasTrapesium(a, b, tinggi)
                if (!answer) {
                    return
                }
                parameter.value = ''
                answerLuasDisplay.innerText = answer
            } else if (luas.id === 'luasLingkaran') {
                luasLingkaran(r)
                if (!answer) {
                    return
                }
                parameter.value = ''
                answerLuasDisplay.innerText = answer
            }
        })
    })

    hitungKeliling.forEach((keliling) => {
        keliling.addEventListener('click', () => {
            if (keliling.id === 'kelilingSegitiga') {
                kelilingSegitiga(a, b, c)
                if (!answer) {
                    return
                }
                parameter.value = ''
                answerKelilingDisplay.innerText = answer
            } else if (keliling.id === 'kelilingPersegi') {
                kelilingPersegi(sisi)
                if (!answer) {
                    return
                }
                parameter.value = ''
                answerKelilingDisplay.innerText = answer
            } else if (keliling.id === 'kelilingPP') {
                kelilingPersegiPanjang(panjang, lebar)
                if (!answer) {
                    return
                }
                parameter.value = ''
                answerKelilingDisplay.innerText = answer
            } else if (keliling.id === 'kelilingTrapesium') {
                kelilingTrapesium(a, b, c, d)
                if (!answer) {
                    return
                }
                parameter.value = ''
                answerKelilingDisplay.innerText = answer
            } else if (keliling.id === 'kelilingLingkaran') {
                kelilingLingkaran(d)
                if (!answer) {
                    return
                }
                parameter.value = ''
                answerKelilingDisplay.innerText = answer
            }
        })
    })
})

bentukBentuk.forEach((bentuk) => {
    bentuk.addEventListener('click', () => {
        answerLuasDisplay.innerText = ''
        answerKelilingDisplay.innerText = ''
        if (bentuk.id === 'segitigaButton') {
            document.querySelector('.segitiga').hidden = false
            document.querySelector('.persegi').hidden = true
            document.querySelector('.persegiPanjang').hidden = true
            document.querySelector('.trapesium').hidden = true
            document.querySelector('.lingkaran').hidden = true
        } else if (bentuk.id === 'persegiButton') {
            document.querySelector('.segitiga').hidden = true
            document.querySelector('.persegi').hidden = false
            document.querySelector('.persegiPanjang').hidden = true
            document.querySelector('.trapesium').hidden = true
            document.querySelector('.lingkaran').hidden = true
        } else if (bentuk.id === 'persegiPanjangButton') {
            document.querySelector('.segitiga').hidden = true
            document.querySelector('.persegi').hidden = true
            document.querySelector('.persegiPanjang').hidden = false
            document.querySelector('.trapesium').hidden = true
            document.querySelector('.lingkaran').hidden = true
        } else if (bentuk.id === 'trapesiumButton') {
            document.querySelector('.segitiga').hidden = true
            document.querySelector('.persegi').hidden = true
            document.querySelector('.persegiPanjang').hidden = true
            document.querySelector('.trapesium').hidden = false
            document.querySelector('.lingkaran').hidden = true
        } else if (bentuk.id === 'lingkaranButton') {
            document.querySelector('.segitiga').hidden = true
            document.querySelector('.persegi').hidden = true
            document.querySelector('.persegiPanjang').hidden = true
            document.querySelector('.trapesium').hidden = true
            document.querySelector('.lingkaran').hidden = false
        }
    })
})

let init = () => {
    document.querySelector('.segitiga').hidden = false
    document.querySelector('.persegi').hidden = true
    document.querySelector('.persegiPanjang').hidden = true
    document.querySelector('.trapesium').hidden = true
    document.querySelector('.lingkaran').hidden = true
}

init()

