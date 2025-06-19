#!/bin/bash

# $1 - директория, которую нужно исключить из поиска

# Подсчёт количества html-файлов, исключая директорию $1
STAT_PAGES_COUNT=$(find . -type f -name "*.html" ! -path "./pagefind/*" ! -path "./o/*" ! -path "./tags/*" | wc -l)

# Замена всех вхождений STAT_PAGES_COUNT в html-файлах на значение переменной
find . -type f -name "*.html" ! -path "./pagefind/*" -exec sed -i "s/STAT_PAGES_COUNT/$STAT_PAGES_COUNT/g" {} +

# Вывод результата (опционально)
echo "Количество html страниц: $STAT_PAGES_COUNT"
