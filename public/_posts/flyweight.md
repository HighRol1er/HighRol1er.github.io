---
title: Fly Weight Pattern
tags: [Design-Pattern]
date: 2026-01-26
---

# 개요

> 플라이웨이트는 각 객체에 모든 데이터를 유지하는 대신 여러 객체들 간에 상태의 공통 부분들을 공유하여 사용할 수 있는 RAM에 더 많은 객체들을 포함할 수 있도록 하는 구조 디자인 패턴입니다. - 리팩토링 구루

> 플라이웨이트 패턴(Flyweight pattern)는 동일하거나 유사한 객체들 사이에 가능한 많은 데이터를 서로 공유하여 사용하도록 하여 메모리 사용량을 최소화하는 소프트웨어 디자인 패턴이다. 종종 오브젝트의 일부 상태 정보는 공유될 수 있는데, 플라이웨이트 패턴에서는 이와 같은 상태 정보를 외부 자료 구조에 저장하여 플라이웨이트 오브젝트가 잠깐 동안 사용할 수 있도록 전달한다. - 위키 피디아

동일하거나 유사한 객체들의 데이터를 서로 공유해 메모리 사용량을 최소화하는 소프트웨어 디자인 패턴<br/>
→ 모든 객체를 인스턴스화 하지 않고 재사용할 수 있는 객체는 재사용해서 메모리를 덜 쓰게 만든다.

## 슈퍼마리오?

![flyweight](flyweight/flyweight1.webp)
참고: https://www.youtube.com/watch?v=5ZXOV1ma35g

## 불변성

플라이웨이트는 생성자 매개변수들을 통해 상태를 한 번만 초기화해야 함 <br/>
그리고 `setter`, `public` 필드들을 다른 객체들에 노출해서는 안됨

## 코드

![flyweight](flyweight/flyweight2.webp)

`Tree` 클래스에서 반복되는 고유상태를 추출해 `TreeType` 클래스로 이동 시킴

```java
// 공유 상태 (Extrinsic State)
// 나무의 위치 x,y 좌표값은 나무마다 다름
public class Tree {
    private int x;
    private int y;
    private TreeType type;

    public Tree(int x, int y, TreeType type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    public void draw(Graphics g) {
        type.draw(g, x, y);
    }
}

// 고유 상태 (Intrinsic State):
// 나무의 이름, 색상, 텍스처는 공유 가능한 객체, 변함 X
public class TreeType {
    private String name;
    private Color color;
    private String otherTreeData;

    public TreeType(String name, Color color, String otherTreeData) {
        this.name = name;
        this.color = color;
        this.otherTreeData = otherTreeData;
    }

    public void draw(Graphics g, int x, int y) {
        g.setColor(Color.BLACK);
        g.fillRect(x - 1, y, 3, 5);
        g.setColor(color);
        g.fillOval(x - 5, y - 10, 10, 10);
    }
}

// cache `TreeType`
// 팩토리이긴하나 계속 찍어내는게 아님
public class TreeFactory {
    // tree pool
    static Map<String, TreeType> treeTypes = new HashMap<>();

    public static TreeType getTreeType(String name, Color color, String otherTreeData) {
        TreeType result = treeTypes.get(name);
        if (result == null) {
            result = new TreeType(name, color, otherTreeData);
            treeTypes.put(name, result);
        }
        return result;
    }
}


public class Forest extends JFrame {
    private List<Tree> trees = new ArrayList<>();

    public void plantTree(int x, int y, String name, Color color, String otherTreeData) {
        // TreeType은 가져오고
        TreeType type = TreeFactory.getTreeType(name, color, otherTreeData);
        // Tree는 새로 생성!
        Tree tree = new Tree(x, y, type);
        trees.add(tree);
    }

    @Override
    public void paint(Graphics graphics) {
        for (Tree tree : trees) {
            tree.draw(graphics);
        }
    }
}

public class Demo {
    static int CANVAS_SIZE = 500;
    static int TREES_TO_DRAW = 1000000;
    static int TREE_TYPES = 2;

    public static void main(String[] args) {
        Forest forest = new Forest();
        for (int i = 0; i < Math.floor(TREES_TO_DRAW / TREE_TYPES); i++) {
            forest.plantTree(random(0, CANVAS_SIZE), random(0, CANVAS_SIZE),
                    "Summer Oak", Color.GREEN, "Oak texture stub");
            forest.plantTree(random(0, CANVAS_SIZE), random(0, CANVAS_SIZE),
                    "Autumn Oak", Color.ORANGE, "Autumn Oak texture stub");
        }
        forest.setSize(CANVAS_SIZE, CANVAS_SIZE);
        forest.setVisible(true);

        System.out.println(TREES_TO_DRAW + " trees drawn");
        System.out.println("---------------------");
        System.out.println("Memory usage:");
        System.out.println("Tree size (8 bytes) * " + TREES_TO_DRAW);
        System.out.println("+ TreeTypes size (~30 bytes) * " + TREE_TYPES + "");
        System.out.println("---------------------");
        System.out.println("Total: " + ((TREES_TO_DRAW * 8 + TREE_TYPES * 30) / 1024 / 1024) +
                "MB (instead of " + ((TREES_TO_DRAW * 38) / 1024 / 1024) + "MB)");
    }

    private static int random(int min, int max) {
        return min + (int) (Math.random() * ((max - min) + 1));
    }
}
```

## GC 처리 주의 사항

- 관리되고 있는 인스턴스는 GC 처리되지 않는다.

나무를 렌더링하는 작업을 다 끝내서 더 이상 나무를 생성할 일이 없다면 반드시 `TreeFactory`에 있는 `tree popl`을 비워줄 필요가 있다.<br/>
그래야 인스턴스에 대한 참조를 잃은 `Tree`들도 GC에 의해 수거된다. 비워주지 않으면 `Tree` 인스턴스들은 메모리에 쓸모 없이 남아 있게 된다.

## WFC를 이용한 맵 생성기

https://soniseli.itch.io/map-generator-wfc
