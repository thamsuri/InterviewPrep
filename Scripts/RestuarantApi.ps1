
Write-Host 'Hello, World!'

$configFilePath = Split-Path -Path $PSScriptRoot -Parent  
$apiPath =  $configFilePath + "\RestaurantAPI\bin\Debug\netcoreapp3.1"

Write-Host $apiPath

Set-Location -Path $apiPath

dotnet RestaurantAPI.dll --urls="http://localhost:7001"