require('andromeda').setup()
vim.api.nvim_set_hl(0, 'Normal', {bg = 'none'})
vim.api.nvim_set_hl(0, 'LineNr', {bg = 'none', fg='#00e8c6', bold=true})
vim.api.nvim_set_hl(0, 'LineNrAbove', {fg='#ff00aa'})
vim.api.nvim_set_hl(0, 'LineNrBelow', {fg='#ff00aa'})
print(require('andromeda'))

