import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import { Text } from '@/components/Themed';
import { MaterialIcons } from "@expo/vector-icons";
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <MaterialIcons name={"school"} size={25} color={color} />,
          tabBarLabel: ({ color }) => (
          <Text style={{ fontFamily: "extrabold", fontSize: 11, color, marginTop: 5 }}>{/* ✅ 폰트 적용 */}
          정처기
          </Text>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1}}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <MaterialIcons name={"code"} size={25} color={color} />,
                    tabBarLabel: ({ color }) => (
          <Text style={{ fontFamily: "extrabold", fontSize: 11, color, marginTop: 5 }}>{/* ✅ 폰트 적용 */}
          코딩테스트
          </Text>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1}}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Tab Three',
          tabBarIcon: ({ color }) =>  <MaterialIcons name={"home-filled"} size={25} color={color} />,
                    tabBarLabel: ({ color }) => (
          <Text style={{ fontFamily: "extrabold", fontSize: 11, color, marginTop: 5 }}>{/* ✅ 폰트 적용 */}
          데볼트 홈
          </Text>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1}}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Tab Four',
          tabBarIcon: ({ color }) => <MaterialIcons name={"forum"} size={25} color={color} />,
                    tabBarLabel: ({ color }) => (
          <Text style={{ fontFamily: "extrabold", fontSize: 11, color, marginTop: 5 }}>{/* ✅ 폰트 적용 */}
          멘토링
          </Text>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1}}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="five"
        options={{
          title: 'Tab Five',
          tabBarIcon: ({ color }) =>  <MaterialIcons name={"person"} size={25} color={color} />,
                    tabBarLabel: ({ color }) => (
          <Text style={{ fontFamily: "extrabold", fontSize: 11, color, marginTop: 5 }}>{/* ✅ 폰트 적용 */}
          마이
          </Text>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1}}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
