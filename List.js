
class List {
    constructor(){
        this.size = 0
        this.position = 0
        this.store = []
    }

    append(item){
        this.store[this.size++] = item
    }

    find(item){
        let itemIndex
        this.store.forEach((storeItem, index) => itemIndex = item == storeItem ? index : -1)
        return itemIndex
    }

    remove(item){
        let itemIndex = this.find(item)

        if(itemIndex > -1){
            this.store.splice(itemIndex, 1)
            this.size--
            return true
        } else {
            return false
        }
    }

    length(){
        return this.size
    }

    display(){
        return this.store
    }

    insert(item, after){
        let insertPosition = this.find(after)
        if(insertPosition > -1){
            this.store.splice(insertPosition, 0, item)
            this.size++
            return true
        } else {
            return false
        }
    }

    clear(){
        this.store = []
        this.size = 0
        this.position = 0
    }

    contains(item){
        return this.find(item) > -1 ? true : false
    }

    front(){
        this.pos = 0
    }

    end(){
        this.position = this.size - 1
    }

    prev(){
        this.position > 0 ? this.position-- : null
    }

    next(){
        this.position < this.size - 1 ? this.position++ : null
    }

    currentPosition(){
        return this.position
    }

    move(position){
        this.position = position
    }

    getItem(){
        return this.store[this.position]
    }
}
