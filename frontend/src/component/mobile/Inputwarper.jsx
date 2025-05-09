import React from 'react'

const Inputwarper = () => {
  return (
    <form action="#" method="get" class="input-wrapper">
    <input type="text" class="form-control" name="search" autocomplete="off" placeholder="Search"
        required />
    <button class="btn btn-search" type="submit">
        <i class="w-icon-search"></i>
    </button>
</form>
  )
}

export default Inputwarper
