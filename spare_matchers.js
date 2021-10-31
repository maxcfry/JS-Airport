// // toBe()
// // toEqual()
// // not.toBe()
// // toBeNull
// // toBeDefined
// // toBeUndefined
// // toBeTruthy
// // toBeFalsy
// // toMatch
// // toContain
// // toThrow(Error)

if(this.limit){
  throw(Error)
}else{
  this.planes.push(plane)
}

1) I need to find a way of setting a max capacity.I
2) In ruby this would be achieved by writing a boolean method
such as Max_Capacity (defiend as planes >= 10)
3) Alternatively, MAX_CAP would be a constant set at 10 in one 
place and then called in various methods
4) I need to find out - how do I set a max capacity, or a limit = array.length
