vim.cmd [[packadd packer.nvim]]

require('packer').startup(function(use)
  use 'wbthomason/packer.nvim'
  
  use {
    'nvim-telescope/telescope.nvim',
    branch = '0.1.x',
    requires = {{'nvim-lua/plenary.nvim'}},
  }

  use (
    'nvim-treesitter/nvim-treesitter', {run = ':TSUpdate'}
  )
  use {
    'nobbmaestro/nvim-andromeda',
    requires = {'tjdevries/colorbuddy.nvim', branch='dev'}
  }
  use('mbbill/undotree')
end)

print("lua/aland/packer.lua")

