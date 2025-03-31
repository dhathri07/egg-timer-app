#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main() {
    int seconds = 120; // 2 minutes

    printf("{\"time\": %d}\n", seconds);
    fflush(stdout);
    for (int i = seconds - 1; i >= 0; i--) {
        sleep(1);
        printf("{\"time\": %d}\n", i);
        fflush(stdout);
    }
    return 0;
}
